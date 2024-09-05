package com.payout.transaction_service.transaction_service.utilities;

public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}
