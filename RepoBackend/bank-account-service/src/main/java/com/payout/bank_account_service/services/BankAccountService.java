package com.payout.bank_account_service.services;

import com.payout.bank_account_service.models.BankAccount;
import com.payout.bank_account_service.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Servicio para gestionar la lógica de negocio relacionada con las cuentas bancarias.
 */
@Service
public class BankAccountService {


    @Autowired
    private BankAccountRepository bankAccountRepository;

    public List<BankAccount> getAllBankAccounts() {
        return bankAccountRepository.findAll();
    }

    public Optional<BankAccount> getBankAccountById(Long id) {
        return bankAccountRepository.findById(id);
    }

    public BankAccount createBankAccount(BankAccount bankAccount) {
        bankAccount.setCreatedAt(LocalDateTime.now());
        bankAccount.setUpdatedAt(LocalDateTime.now());
        return bankAccountRepository.save(bankAccount);
    }

    public BankAccount updateBankAccount(Long id, BankAccount bankAccount) {
        Optional<BankAccount> existingAccount = bankAccountRepository.findById(id);
        if (existingAccount.isPresent()) {
            BankAccount updatedAccount = existingAccount.get();
            updatedAccount.setIdBank(bankAccount.getIdBank());
            updatedAccount.setBankAccount(bankAccount.getBankAccount());
            updatedAccount.setTypeAccount(bankAccount.getTypeAccount());
            updatedAccount.setIdCurrency(bankAccount.getIdCurrency());
            updatedAccount.setLinkData(bankAccount.getLinkData());
            updatedAccount.setBalance(bankAccount.getBalance()); // Actualiza el balance
            updatedAccount.setUpdatedAt(LocalDateTime.now());
            return bankAccountRepository.save(updatedAccount);
        } else {
            throw new RuntimeException("Bank Account not found");
        }
    }

    public void deleteBankAccount(Long id) {
        bankAccountRepository.deleteById(id);
    }
}
