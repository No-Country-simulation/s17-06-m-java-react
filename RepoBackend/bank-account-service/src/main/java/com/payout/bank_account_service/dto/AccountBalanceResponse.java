package com.payout.bank_account_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountBalanceResponse {
    private Long accountId;
    private Double balance;
    private String alias;
    private Long cvu;

    public AccountBalanceResponse(Long accountId, Double balance) {
    }
}