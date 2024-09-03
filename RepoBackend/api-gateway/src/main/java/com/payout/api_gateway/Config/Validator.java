package com.payout.api_gateway.Config;

import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import com.payout.api_gateway.Dto.RequestDTO;
import java.util.regex.Pattern;
import lombok.Data;

@Component
@ConfigurationProperties(prefix = "public")
@Data
public class Validator {
    private List<RequestDTO> paths;

    public boolean isPublicPath(RequestDTO requestDTO) {
        String requestUri = requestDTO.getUri();
        String requestMethod = requestDTO.getMethod().toUpperCase();

        return paths.stream().anyMatch(
                p -> {
                    String patternUri = p.getUri();
                    String patternMethod = p.getMethod().toUpperCase();

                    return Pattern.matches(patternUri, requestUri) && patternMethod.equals(requestMethod);
                });
    }
}
