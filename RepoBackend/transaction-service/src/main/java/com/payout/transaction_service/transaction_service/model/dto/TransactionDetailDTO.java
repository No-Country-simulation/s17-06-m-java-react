package com.payout.transaction_service.transaction_service.model.dto;

import com.payout.transaction_service.transaction_service.enums.CurrencyType;
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
    private CurrencyType currencySource;
    private CurrencyType currencyTarget;
}