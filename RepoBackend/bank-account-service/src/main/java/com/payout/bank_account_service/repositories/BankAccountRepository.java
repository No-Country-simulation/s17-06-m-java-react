package com.payout.bank_account_service.repositories;

import com.payout.bank_account_service.models.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
}
