package com.payout.bank_account_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BankAccountDTO {
    private Long id;
    private Long cvu;
    private String alias;
    private Double balance;
    private Long userId;
}