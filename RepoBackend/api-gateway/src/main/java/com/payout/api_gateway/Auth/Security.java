package com.payout.api_gateway.Auth;

import java.net.URI;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.util.UriComponentsBuilder;
import com.payout.api_gateway.Dto.RequestDTO;

@Component
public class Security extends AbstractGatewayFilterFactory<Security> {

    private final WebClient.Builder webClient;

    public Security(WebClient.Builder builder) {
        super(Security.class);
        this.webClient = builder;
    }

    @Override
    public GatewayFilter apply(Security config) {
        return ((exchange, chain) -> {
            RequestDTO requestDTO = new RequestDTO(exchange.getRequest().getPath().toString(),
                    exchange.getRequest().getMethod().toString());

            // if (validator.isPublicPath(requestDTO)) {
            // return chain.filter(exchange);
            // }

            String token = extractToken(exchange);
            if (token == null) {
                exchange.getResponse().setStatusCode(HttpStatus.BAD_REQUEST);
                return exchange.getResponse().setComplete();
            }

            URI uri = UriComponentsBuilder
                    .fromHttpUrl("http://api-gateway/validate?")
                    .queryParam("token", token)
                    .build()
                    .toUri();

            return webClient.build()
                    .post()
                    .uri(uri)
                    .bodyValue(requestDTO)
                    .retrieve().bodyToMono(String.class)
                    .map(t -> exchange)
                    .flatMap(chain::filter)
                    .onErrorResume(e -> {
                        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                        return exchange.getResponse().setComplete();
                    });
        });
    }

    private String extractToken(ServerWebExchange exchange) {
        if (!exchange.getRequest().getHeaders().containsKey("Authorization")) {
            return null;
        }

        String tokenHeader = exchange.getRequest().getHeaders().get("Authorization").get(0);
        String token = tokenHeader.replace("Bearer ", "");

        return token.isEmpty() ? null : token;
    }
}