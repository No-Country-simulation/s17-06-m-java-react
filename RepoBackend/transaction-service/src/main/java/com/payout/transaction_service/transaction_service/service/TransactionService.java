package com.payout.transaction_service.transaction_service.service;

import com.payout.transaction_service.transaction_service.model.dto.TransactionResponse;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.TransferRequestDTO;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;

import java.util.List;

public interface TransactionService {
    List<TransactionDTO> getTransactionHistory(Long accountId);
    TransactionResponse performTransaction(String token, Long userId, String sourceAccountIdentifier, String targetAccountIdentifier, Double amount, String currencySource, String currencyTarget);


    TransactionDTO createTransaction(TransferRequestDTO transferRequest);
    UserBasic getUserInfo(Long userId);
    Double getBalance(String accountIdentifier);
}