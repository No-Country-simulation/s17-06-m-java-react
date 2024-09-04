package com.payout.transaction_service.transaction_service.controller;

import com.payout.transaction_service.transaction_service.domain.Transaction;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDetailDTO;
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

    @PostMapping("/create")
    public ResponseEntity<TransactionDTO> createTransaction(@RequestBody TransactionDTO transactionDto) {
        TransactionDTO createdTransaction = transactionService.createTransaction(transactionDto);
        return ResponseEntity.ok(createdTransaction);
    }

    @GetMapping("/all")
    public ResponseEntity<List<TransactionDTO>> getAllTransactions() {
        List<TransactionDTO> transactions = transactionService.getTransactions();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDTO> getTransactionById(@PathVariable Long id) {
        TransactionDTO transaction = transactionService.getTransactionById(id);
        return ResponseEntity.ok(transaction);
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransactionDetailDTO> transferMoney(
            @RequestParam Long idSourceAccount,
            @RequestParam Long idTargetAccount,
            @RequestParam Double amount,
            @RequestParam String type) {

        TransactionDetailDTO transactionDetail = transactionService.processTransaction(idSourceAccount, idTargetAccount, amount, type);
        return ResponseEntity.ok(transactionDetail);
    }

    @PostMapping("/send")
    public ResponseEntity<Transaction> sendMoney(@RequestBody Transaction transaction) {
        Transaction processedTransaction = transactionService.processTransaction(transaction);
        return ResponseEntity.ok(processedTransaction);
    }
}