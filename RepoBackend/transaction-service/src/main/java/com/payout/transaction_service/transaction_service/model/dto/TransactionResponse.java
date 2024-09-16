package com.payout.transaction_service.transaction_service.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TransactionResponse {
    private Long userId;
    private String userName;
    private Long transactionId;
    private Long sourceAccountId;
    private Long targetAccountId;
    private Double amount;
    private Double balance;
    private Long targetAccountCvu;
    private String targetAccountAlias;
}