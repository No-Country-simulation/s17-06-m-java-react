package com.payout.transaction_service.transaction_service.domain;

import com.payout.transaction_service.transaction_service.enums.TransactionType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity(name = "transaction_payout")
public class TransactionPayout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction")
    private Long idTransaction; // ID único de la transacción (clave primaria)

    @Column(name = "id_source_account", nullable = false)
    private Long idSourceAccount; // ID de la cuenta fuente

    @Column(name = "id_target_account", nullable = false)
    private Long idTargetAccount; // ID de la cuenta destino

    @Column(name = "amount", nullable = false)
    private Double amount; // Monto total de la transacción

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt; // Fecha y hora de creación de la transacción

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TransactionType type; // Tipo de transacción (ENVIO o RECEPCION)

    // Campos adicionales de BankAccount
    @Column(name = "source_alias", length = 100)
    private String sourceAlias; // Alias de la cuenta fuente

    @Column(name = "source_cvu", nullable = false)
    private Long sourceCvu; // CVU de la cuenta fuente

    @Column(name = "target_alias", length = 100)
    private String targetAlias; // Alias de la cuenta destino

    @Column(name = "target_cvu", nullable = false)
    private Long targetCvu; // CVU de la cuenta destino

    // Campos adicionales de User
    @Column(name = "source_user_full_name", length = 255)
    private String sourceUserFullName; // Nombre completo del remitente

    @Column(name = "target_user_full_name", length = 255)
    private String targetUserFullName; // Nombre completo del destinatario

    // Relación uno-a-muchos con TransactionDetail
    @OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TransactionDetailPayout> transactionDetails; // Lista de detalles de transacción
}