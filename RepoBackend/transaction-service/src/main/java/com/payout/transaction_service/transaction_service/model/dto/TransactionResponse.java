package com.payout.transaction_service.transaction_service.model.dto;

import com.payout.transaction_service.transaction_service.enums.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
    private LocalDateTime createdAt;
    private TransactionType type;
}