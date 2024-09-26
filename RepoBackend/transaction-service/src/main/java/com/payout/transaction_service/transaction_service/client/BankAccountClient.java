package com.payout.transaction_service.transaction_service.client;

import com.payout.transaction_service.transaction_service.model.dto.BankBasic;
import com.payout.transaction_service.transaction_service.model.dto.UserBasic;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "bank-account-service", url = "http://localhost:7090/bank_account")
public interface BankAccountClient {

    @GetMapping("/{id}/balance")
    Double getAccountBalance(@PathVariable Long id);

    @PostMapping("/updateBalance")
    void updateAccountBalance(@RequestParam Long accountId,
                              @RequestParam Double newBalance);

    @GetMapping("/find-by-alias")
    BankBasic findByAlias(@RequestParam String alias);

    @GetMapping("/find-by-cvu")
    BankBasic findByCvu(@RequestParam Long cvu);


    @GetMapping("/bytoken")
    ResponseEntity<List<BankBasic>> getAllBankAccountsByToken(@RequestHeader("Authorization") String token);


    @GetMapping("/byuser/{id}")
    ResponseEntity<List<BankBasic>> getAllBankAccountsByIdUser(@PathVariable Long id);

    @GetMapping("/datauser/{identifier}")
    UserBasic getAllBankAccountsByIdentifier(@RequestHeader("Authorization") String token, @PathVariable String identifier);
}