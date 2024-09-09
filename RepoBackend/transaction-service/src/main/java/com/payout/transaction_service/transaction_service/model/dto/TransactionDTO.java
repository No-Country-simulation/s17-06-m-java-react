package com.payout.transaction_service.transaction_service.model.dto;

import com.payout.transaction_service.transaction_service.enums.TransactionType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class TransactionDTO {
    private Long idTransaction;
    private Long idSourceAccount;
    private Long idTargetAccount;
    private Double amount;
    private LocalDateTime createAt;
    private TransactionType type;
}