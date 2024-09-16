package com.payout.transaction_service.transaction_service.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity(name = "transaction_detail_payout")
public class TransactionDetailPayout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction_detail")
    private Long idTransactionDetail; // ID único del detalle de la transacción (clave primaria)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_transaction", nullable = false)
    private TransactionPayout transaction; // Relación con la entidad Transaction

    @Column(name = "amount", nullable = false)
    private Double amount; // Monto involucrado en esta transacción específica

    @Column(name = "final_amount")
    private Double finalAmount; // Monto final después de tarifas o conversiones (si aplica)

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt; // Fecha y hora de creación del detalle

    @Column(name = "currency_source", length = 10)
    private String currencySource; // Moneda de la cuenta de origen

    @Column(name = "currency_target", length = 10)
    private String currencyTarget; // Moneda de la cuenta de destino
}