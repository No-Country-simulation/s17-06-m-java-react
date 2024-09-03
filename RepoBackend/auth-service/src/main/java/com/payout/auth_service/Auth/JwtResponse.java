package com.payout.auth_service.Auth;

import java.util.Date;

public record JwtResponse(String jwtToken, Long id, String email, Date expiresAt) {
}