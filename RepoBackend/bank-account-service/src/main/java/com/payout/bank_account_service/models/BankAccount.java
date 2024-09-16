package com.payout.bank_account_service.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "bank_account")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBankAccount; // ID único para cada cuenta bancaria (generado automáticamente)

    @Column(nullable = false)
    private int idBank; // ID del banco al que pertenece la cuenta

    @Column(nullable = false)
    private Long bankAccount; // Número de cuenta bancaria

    @Column(nullable = false)
    private String typeAccount; // Tipo de cuenta (e.g. ahorro, corriente)

    @Column(nullable = false)
    private int idCurrency; // ID de la moneda de la cuenta

    @Column(nullable = false)
    private LocalDateTime linkData; // Fecha y hora de enlace de datos (puede ser para transacciones)

    @Column(nullable = false)
    private LocalDateTime createdAt; // Fecha y hora de creación de la cuenta

    @Column(nullable = false)
    private LocalDateTime updatedAt; // Fecha y hora de la última actualización de la cuenta

    @Column(nullable = false)
    private Long idUser; // ID del usuario propietario de la cuenta

    @Column(nullable = false)
    private Double balance;

    @Column(nullable = false)
    private String alias;

    @Column(nullable = false)
    private Long cvu;
}