package com.payout.auth_service.Exception;

import java.time.LocalDateTime;

public record CustomErrorResponse(
        LocalDateTime datetime,
        String message,
        String path) {
}
