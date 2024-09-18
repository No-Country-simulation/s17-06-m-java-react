package com.payout.bank_account_service.Exceptions;

import org.bouncycastle.asn1.ocsp.ResponderID;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(BankAccountNotFoundException.class)
    public ResponseEntity<Map<String,String>> handleBankAccountNotFoundException(BankAccountNotFoundException e){
        Map<String,String> response = new HashMap<>();
        response.put("message", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
}
