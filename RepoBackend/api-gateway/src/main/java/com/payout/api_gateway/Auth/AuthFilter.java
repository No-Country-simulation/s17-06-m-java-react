package com.payout.api_gateway.Auth;

import com.payout.api_gateway.Config.Validator;
import com.payout.api_gateway.Dto.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class AuthFilter extends AbstractGatewayFilterFactory<AuthFilter.Config> {
    @Autowired
    private Validator routeValidator;

    private final WebClient.Builder webClient;

    public AuthFilter(WebClient.Builder webClient) {
        super(Config.class);
        this.webClient = webClient;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            RequestDTO requestDTO = new RequestDTO(exchange.getRequest().getPath().toString(),
                    exchange.getRequest().getMethod().toString());

            if (routeValidator.isPublicPath(requestDTO)) {
                return chain.filter(exchange);
            }

            if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                return null;
            }

            String tokenHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
            String[] header = tokenHeader.split(" ");

            if (header.length != 2 || !header[0].equals("Bearer")) {
                return null;
            }

            return webClient.build()
                    .post()
                    .uri("http://api-gateway/validate?token=" + header[1])
                    .bodyValue(new RequestDTO(exchange.getRequest().getPath().toString(),
                            exchange.getRequest().getMethod().toString()))
                    .retrieve().bodyToMono(String.class)
                    .map(t -> exchange)
                    .flatMap(chain::filter)
                    .onErrorResume(e -> {
                        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                        return exchange.getResponse().setComplete();
                    });
        });
    }

    public static class Config {
    }
}
