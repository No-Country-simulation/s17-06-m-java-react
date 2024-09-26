package com.payout.transaction_service.transaction_service.repository;

import com.payout.transaction_service.transaction_service.domain.TransactionPayout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository <TransactionPayout, Long> {
    List<TransactionPayout> findByIdSourceAccountOrIdTargetAccount(Long idSourceAccount, Long idTargetAccount);
    List<TransactionPayout> findByUserId(Long userId);

    /*List<TransactionPayout> findAllByIdUser(Long userId);*/
}