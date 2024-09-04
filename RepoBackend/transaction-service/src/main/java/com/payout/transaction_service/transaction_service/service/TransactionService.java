package com.payout.transaction_service.transaction_service.service;

import com.payout.transaction_service.transaction_service.domain.Transaction;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDTO;
import com.payout.transaction_service.transaction_service.model.dto.TransactionDetailDTO;

import java.util.List;

public interface TransactionService {

    TransactionDTO createTransaction(TransactionDTO transaction);
    List<TransactionDTO> getTransactions();
    TransactionDTO getTransactionById(Long idTransaction);
    TransactionDetailDTO processTransaction(Long idSourceAccount, Long idTargetAccount, Double amount, String type);
    Transaction processTransaction(Transaction transaction);
}