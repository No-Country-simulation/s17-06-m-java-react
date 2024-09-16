package com.payout.transaction_service.transaction_service.repository;

import com.payout.transaction_service.transaction_service.domain.TransactionDetailPayout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionDetailRepository extends JpaRepository<TransactionDetailPayout, Long> {
}