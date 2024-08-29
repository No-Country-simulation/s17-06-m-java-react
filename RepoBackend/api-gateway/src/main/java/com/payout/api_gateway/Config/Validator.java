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
        return paths.stream().anyMatch(
                p -> Pattern.matches(p.getUri(), requestDTO.getUri()) && p.getMethod().equals(requestDTO.getMethod()));
    }
}
