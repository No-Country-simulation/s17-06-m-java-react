package com.payout.transaction_service.transaction_service.service;

import com.payout.transaction_service.transaction_service.http.TransactionResponse;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;

import java.util.List;

public interface TransactionService {

    TransactionDTO createTransaction(TransactionDTO transaction);
    List<TransactionDTO> getTransactionsByAccountId(Long accountId);
    List<TransactionDTO> getTransactionHistory(Long accountId);
    TransactionResponse performTransaction(String token, Long userId, String sourceAccountIdentifier, String targetAccountIdentifier, Double amount, String currencySource, String currencyTarget);

    UserBasic getUserInfo(Long userId);
    Double getBalance(String accountIdentifier);
}