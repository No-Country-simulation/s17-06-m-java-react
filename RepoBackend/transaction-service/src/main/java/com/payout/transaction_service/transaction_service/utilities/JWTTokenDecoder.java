package com.payout.transaction_service.transaction_service.utilities;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

public class JWTTokenDecoder {
    public static Long getUserId(String token) {
        token = token.replace("Bearer ", "");
        DecodedJWT jwt = JWT.decode(token);
        Long userId = jwt.getClaim("Id").asLong();
        return userId;
    }
}
