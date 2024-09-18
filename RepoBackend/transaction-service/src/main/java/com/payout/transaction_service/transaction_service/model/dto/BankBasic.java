package com.payout.transaction_service.transaction_service.model.dto;

import lombok.Data;

@Data
public class BankBasic {
    private Long idBankAccount;
    private String alias;
    private Long cvu;
    private Double balance;
}