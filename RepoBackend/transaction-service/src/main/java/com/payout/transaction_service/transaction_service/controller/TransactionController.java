package com.payout.transaction_service.transaction_service.controller;

import com.payout.transaction_service.transaction_service.model.dto.TransactionResponse;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.TransferRequestDTO;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;
import com.payout.transaction_service.transaction_service.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction/v1")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    //  Ver historial de transacciones
    @GetMapping("/history/{accountId}")
    public ResponseEntity<List<TransactionDTO>> getTransactionHistory(@PathVariable Long accountId) {
        List<TransactionDTO> transactionHistory = transactionService.getTransactionHistory(accountId);
        return ResponseEntity.ok(transactionHistory);
    }

    // Consultar saldo
    @GetMapping("/balance/{accountIdentifier}")
    public ResponseEntity<Double> getAccountBalance(@PathVariable String accountIdentifier) {
        // Identificar si es un alias o un CVU
        Double balance = transactionService.getBalance(accountIdentifier);
        return ResponseEntity.ok(balance);
    }

    // Consultar información del cliente
    @GetMapping("/user/{userId}")
    public ResponseEntity<UserBasic> getUserInfo(@PathVariable Long userId) {
        UserBasic userInfo = transactionService.getUserInfo(userId);
        return ResponseEntity.ok(userInfo);
    }

    // Registrar una nueva transacción
    @PostMapping("/transfer")
    public ResponseEntity<TransactionResponse> transferFunds(
            @RequestBody TransferRequestDTO transferRequest,
            @RequestHeader("Authorization") String token) {

        // Realizar la transacción usando el token del usuario logueado
        TransactionResponse transactionResponse = transactionService.performTransaction(
                token,
                transferRequest.getUserId(),
                transferRequest.getSourceAccountIdentifier(),
                transferRequest.getTargetAccountIdentifier(),
                transferRequest.getAmount(),
                transferRequest.getCurrencySource(),
                transferRequest.getCurrencyTarget()
        );
        return ResponseEntity.ok(transactionResponse);
    }
}