package com.payout.transaction_service.transaction_service.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class TransactionDetailDTO {
    private Long idTransactionDetail;
    private Long idTransaction;
    private Double amount;
    private Double finalAmount;
    private LocalDateTime createAt;
    private String currencySource;
    private String currencyTarget;
}