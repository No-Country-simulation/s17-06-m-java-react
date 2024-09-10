package com.payout.currency.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "currency")
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCurrency;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false, updatable = false)
    private Timestamp createdAt;

    @Column(nullable = false)
    private Timestamp updatedAt;

    // Getters y Setters
    public Long getIdCurrency() {
        return idCurrency;
    }

    public void setIdCurrency(Long idCurrency) {
        this.idCurrency = idCurrency;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Timestamp(System.currentTimeMillis());
        this.updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Timestamp(System.currentTimeMillis());
    }
}