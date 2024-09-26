package com.payout.bank_service.controller;

import com.payout.bank_service.dto.BankDto;
import com.payout.bank_service.model.Bank;
import com.payout.bank_service.services.BankServiceImpl;
import com.payout.bank_service.services.IBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.plaf.basic.BasicLookAndFeel;
import java.util.List;

@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired
    private BankServiceImpl bankService;

    @GetMapping
    public List<Bank>getAllBanks(){
        return bankService.getAllBanks();
    }

    @PostMapping
    public Bank createBank(@RequestBody BankDto bankDto ){
        return bankService.createBank(bankDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bank> updateBankAccount(@PathVariable Long id, @RequestBody BankDto bank) {
        try {
            return ResponseEntity.ok(bankService.updateBank(id, bank));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBankAccount(@PathVariable Long id) {
        bankService.deleteBank(id);
        return ResponseEntity.noContent().build();
    }

}
