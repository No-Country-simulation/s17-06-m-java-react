package com.payout.auth_service.Auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

public class JwtTokenDecoder {
    public static Long getUserId(String token) {
        token = token.replace("Bearer ", "");
        DecodedJWT jwt = JWT.decode(token);
        Long userId = jwt.getClaim("Id").asLong();
        return userId;
    }
}
