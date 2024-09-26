package com.payout.transaction_service.transaction_service.service;

import com.nimbusds.jwt.SignedJWT;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Map;

@Service
public class JWTUtilityServiceImpl {

    // Metodo para extraer claims del token JWT
    public String extractUserId(String token) {
        try {
            // Parsear el token JWT
            SignedJWT signedJWT = SignedJWT.parse(token);

            // Obtener el payload del token (claims)
            Map<String, Object> claims = signedJWT.getJWTClaimsSet().getClaims();

            // Retornar el claim que corresponde al idUsuario
            return claims.get("idUsuario").toString();
        } catch (ParseException e) {
            throw new RuntimeException("Error al parsear el token JWT", e);
        }
    }
}