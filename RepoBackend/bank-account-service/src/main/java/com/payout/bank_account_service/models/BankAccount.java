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
    @Column(name="id_bankaccount")
    private Long idBankAccount; // ID único para cada cuenta bancaria (generado automáticamente)

    @Column(name = "id_bank",nullable = false)
    private int idBank; // ID del banco al que pertenece la cuenta

    @Column(name="bank_account",nullable = false)
    private Long bankAccount; // Número de cuenta bancaria

    @Column(name ="type_account",nullable = false)
    private String typeAccount; // Tipo de cuenta (e.g. ahorro, corriente)

    @Column(name ="id_currency",nullable = false)
    private int idCurrency; // ID de la moneda de la cuenta

    @Column(name="link_date")
    private LocalDateTime linkDate; // Fecha y hora de enlace de datos (puede ser para transacciones)

    @Column(name="created_at",nullable = false)
    private LocalDateTime createdAt; // Fecha y hora de creación de la cuenta

    @Column(name="updated_at",nullable = false)
    private LocalDateTime updatedAt; // Fecha y hora de la última actualización de la cuenta

    @Column(name="id_user",nullable = false)
    private Long idUser; // ID del usuario propietario de la cuenta

    @Column(name="balance",nullable = false)
    private Double balance;

    @Column(name="alias",nullable = false)
    private String alias;

    @Column(name="cvu",nullable = false)
    private Long cvu;

    @Column(name="link_data")
    private LocalDateTime linkData;
}