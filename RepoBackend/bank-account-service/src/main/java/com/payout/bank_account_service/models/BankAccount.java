package com.payout.bank_account_service.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
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

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Long getIdBankAccount() {
        return idBankAccount;
    }

    public void setIdBankAccount(Long idBankAccount) {
        this.idBankAccount = idBankAccount;
    }

    public int getIdBank() {
        return idBank;
    }

    public void setIdBank(int idBank) {
        this.idBank = idBank;
    }

    public Long getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(Long bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getTypeAccount() {
        return typeAccount;
    }

    public void setTypeAccount(String typeAccount) {
        this.typeAccount = typeAccount;
    }

    public int getIdCurrency() {
        return idCurrency;
    }

    public void setIdCurrency(int idCurrency) {
        this.idCurrency = idCurrency;
    }

    public LocalDateTime getLinkData() {
        return linkData;
    }

    public void setLinkData(LocalDateTime linkData) {
        this.linkData = linkData;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }
}