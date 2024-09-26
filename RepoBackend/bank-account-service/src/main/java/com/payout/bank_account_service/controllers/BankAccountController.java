package com.payout.bank_account_service.controllers;

import com.payout.bank_account_service.dto.AccountBalanceResponse;
import com.payout.bank_account_service.dto.UserBasic;
import com.payout.bank_account_service.models.BankAccount;
import com.payout.bank_account_service.services.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gestionar las solicitudes relacionadas con cuentas bancarias.
 */
@RestController
@RequestMapping("/bank_account")
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

    @GetMapping("/{id}/balance")
    public ResponseEntity<AccountBalanceResponse> getAccountBalance(@PathVariable("id") Long accountId) {
        Double balance = bankAccountService.getBalanceById(accountId);
        return ResponseEntity.ok(new AccountBalanceResponse(accountId, balance));
    }

    @PostMapping("/updateBalance")
    public ResponseEntity<String> updateAccountBalance(
            @RequestParam Long accountId,
            @RequestParam Double newBalance) {
        try {
            bankAccountService.updateBalance(accountId, newBalance);
            return ResponseEntity.ok("Balance updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating balance: " + e.getMessage());
        }
    }

    // Buscar cuenta por alias
    @GetMapping("/find-by-alias")
    public ResponseEntity<BankAccount> findByAlias(@RequestParam String alias) {
        BankAccount account = bankAccountService.findByAlias(alias);
        return ResponseEntity.ok(account);
    }

    // Buscar cuenta por CVU
    @GetMapping("/find-by-cvu")
    public ResponseEntity<BankAccount> findByCvu(@RequestParam Long cvu) {
        BankAccount account = bankAccountService.findByCvu(cvu);
        return ResponseEntity.ok(account);
    }

    @GetMapping("/byuser/{id}")
    public ResponseEntity<List<BankAccount>> getAllBankAccountsByIdUser(@PathVariable Long id) {
        return ResponseEntity.ok(bankAccountService.getAllBankAccountsByIdUser(id));
    }

    @GetMapping("/bytoken")
    public ResponseEntity<List<BankAccount>> getAllBankAccountsByToken(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(bankAccountService.getAllByToken(token));
    }

    @GetMapping("/datauser/{identifier}")
    public ResponseEntity<UserBasic> getAllBankAccountsByIdentifier(@RequestHeader("Authorization") String token,@PathVariable String identifier) {
        return ResponseEntity.ok(bankAccountService.getAllBankAccountsByIdentifier(identifier,token));
    }




}