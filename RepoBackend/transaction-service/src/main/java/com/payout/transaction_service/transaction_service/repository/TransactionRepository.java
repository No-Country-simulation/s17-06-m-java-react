package com.payout.transaction_service.transaction_service.repository;

import com.payout.transaction_service.transaction_service.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository <Transaction, Long> {
    List<Transaction> findByIdSourceAccountOrIdTargetAccount(Long idSourceAccount, Long idTargetAccount);
    /*List<Transaction> findByUserId(Long userId);*/
}