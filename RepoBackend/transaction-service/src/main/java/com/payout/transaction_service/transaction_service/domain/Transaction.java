package com.payout.transaction_service.transaction_service.domain;

import com.payout.transaction_service.transaction_service.enums.TransactionType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransaction;

    @Column(nullable = false)
    private Long idSourceAccount;

    @Column(nullable = false)
    private Long idTargetAccount;

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private LocalDateTime createAt;

    @Column(nullable = false)
    private TransactionType type;

    @OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TransactionDetail> transactionDetails;
}