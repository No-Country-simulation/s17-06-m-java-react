package com.payout.transaction_service.transaction_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "bank-account-service", url = "https://localhost:")
public interface BankServiceClient {

    @GetMapping("/accounts/{accountId}/balance")
    Double getAccountBalance(@PathVariable("accountId") Long accountId);

    @PutMapping("/accounts/{accountId}/debit")
    void debitAccount(@PathVariable("accountId") Long accountId, @RequestParam Double amount);

    @PutMapping("/accounts/{accountId}/credit")
    void creditAccount(@PathVariable("accountId") Long accountId, @RequestParam Double amount);
}