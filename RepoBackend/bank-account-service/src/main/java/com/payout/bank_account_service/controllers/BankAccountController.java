package com.payout.bank_account_service.controllers;

import com.payout.bank_account_service.models.BankAccount;
import com.payout.bank_account_service.services.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gestionar las solicitudes relacionadas con cuentas bancarias.
 */
@RestController
@RequestMapping("bank_account")
public class BankAccountController {


    @Autowired
    private BankAccountService bankAccountService;

    @GetMapping
    public List<BankAccount> getAllBankAccounts() {
        return bankAccountService.getAllBankAccounts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BankAccount> getBankAccountById(@PathVariable Long id) {
        Optional<BankAccount> bankAccount = bankAccountService.getBankAccountById(id);
        return bankAccount.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public BankAccount createBankAccount(@RequestBody BankAccount bankAccount) {
        return bankAccountService.createBankAccount(bankAccount);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BankAccount> updateBankAccount(@PathVariable Long id, @RequestBody BankAccount bankAccount) {
        try {
            return ResponseEntity.ok(bankAccountService.updateBankAccount(id, bankAccount));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBankAccount(@PathVariable Long id) {
        bankAccountService.deleteBankAccount(id);
        return ResponseEntity.noContent().build();
    }
}