package com.payout.transaction_service.transaction_service.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TransferRequestDTO {
    private String aliasOrCvu;
    private Long userId;
    private String sourceAccountIdentifier;
    private String targetAccountIdentifier;
    private Double amount;
    private String currencySource;
    private String currencyTarget;
}