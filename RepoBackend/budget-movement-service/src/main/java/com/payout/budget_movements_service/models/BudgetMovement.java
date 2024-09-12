package com.payout.budget_movements_service.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Table(name = "budget_movements")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BudgetMovement {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    @Column(name = "id_budget_movement")
    private Long id;
    @Column(name = "id_budget")
    private Long budgetId;
    @Column(name ="description")
    private String description;
    @Column(name = "amount")
    private double amount;
    @Column(name = "created_at")
    private Timestamp createdAt;
}
