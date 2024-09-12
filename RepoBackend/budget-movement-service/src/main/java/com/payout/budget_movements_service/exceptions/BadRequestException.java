package com.payout.budget_movements_service.exceptions;

import lombok.Data;

@Data
public class BadRequestException extends RuntimeException{

    public BadRequestException(String message) {
        super(message);
    }
}