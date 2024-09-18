package com.payout.transaction_service.transaction_service.controller;

import com.payout.transaction_service.transaction_service.model.dto.TransactionResponse;
import com.payout.transaction_service.transaction_service.model.dto.TransferRequestDTO;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;
import com.payout.transaction_service.transaction_service.service.TransactionService;
import com.payout.transaction_service.transaction_service.utilities.JWTTokenDecoder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction/v1")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    // Endpoint para obtener el historial de transacciones
    @GetMapping("/history")
    public ResponseEntity<List<TransactionResponse>> getTransactionHistory(@RequestHeader("Authorization") String token) {
        // Extraer el userId del token usando JWTTokenDecoder
        Long userId = JWTTokenDecoder.getUserId(token);

        // Llamar al servicio para obtener el historial de transacciones
        List<TransactionResponse> transactionHistory = transactionService.getTransactionHistory(userId);

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

    // Endpoint para realizar una transferencia
    @PostMapping("/transfer")
    public ResponseEntity<TransactionResponse> transfer(@RequestHeader("Authorization") String token,
                                                        @RequestBody TransferRequestDTO request) {
        // Extraer el userId del token (asumiendo que tienes una utilidad para esto)
        Long userId = JWTTokenDecoder.getUserId(token);

        // Llamar al servicio de transacciones para realizar la transferencia
        TransactionResponse response = transactionService.performTransaction(
                token,
                userId,
                request.getSourceAccountIdentifier(),
                request.getTargetAccountIdentifier(),
                request.getAmount(),
                request.getCurrencySource(),
                request.getCurrencyTarget()
        );

        return ResponseEntity.ok(response);
    }
}