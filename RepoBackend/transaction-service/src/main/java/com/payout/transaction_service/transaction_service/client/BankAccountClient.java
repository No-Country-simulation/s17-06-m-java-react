package com.payout.transaction_service.transaction_service.client;

import com.payout.bank_account_service.dto.BankAccountDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "bank-account-service", url = "https://localhost:7076/bank_account")
public interface BankAccountClient {

    @GetMapping("/{id}/balance")
    Double getAccountBalance(@PathVariable Long id);

    @PostMapping("/updateBalance")
    void updateAccountBalance(@RequestParam Long accountId,
                              @RequestParam Double newBalance);

    @GetMapping("/find-by-alias")
    BankAccountDTO findByAlias(@RequestParam String alias);

    @GetMapping("/find-by-cvu")
    BankAccountDTO findByCvu(@RequestParam Long cvu);



}