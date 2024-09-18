package com.payout.transaction_service.transaction_service.utilities;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

public class JWTTokenDecoder {
    public static Long getUserId(String token) {
        // Quitar el prefijo "Bearer " del token si está presente
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        // Decodificar el token
        DecodedJWT jwt = JWT.decode(token);
        // Extraer el userId del token
        Long userId = jwt.getClaim("Id").asLong();
        return userId;
    }
}
