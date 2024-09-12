package com.payout.budget_service.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Table(name = "budgets")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Budget {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long idBudget;
    @Column (name = "id_user")
    private Long idUser;
    @Column(name = "created_at")
    private Timestamp createdAt;
    @Column(name = "start_date")
    private Timestamp startDate;
    @Column(name = "end_date")
    private Timestamp endDate;
    @Column(name = "name")
    private String name;
    @Column(name = "max_amount")
    private Double maxAmount;
    @Column(name = "status")
    private boolean status;
}
