package com.payout.bank_account_service.repositories;

import com.payout.bank_account_service.models.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
    Optional<BankAccount> findByAlias(String alias);
    Optional<BankAccount> findByCvu(Long cvu);

    List<BankAccount> findAllByIdUser(Long iduser);
}