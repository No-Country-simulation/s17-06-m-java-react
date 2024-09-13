package com.payout.transaction_service.transaction_service.domain;

import com.payout.transaction_service.transaction_service.enums.CurrencyType;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class TransactionDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransactionDetail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idTransaction", nullable = false)
    private Transaction transaction;

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private Double finalAmount;

    @Column(nullable = false)
    private LocalDateTime createAt;

    @Column(nullable = false)
    private CurrencyType currencySource;

    @Column(nullable = false)
    private CurrencyType currencyTarget;
}