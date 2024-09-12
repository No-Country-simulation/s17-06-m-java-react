package com.payout.budget_service.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BudgetMovement {
    private Long id;
    private Long budgetId;
    private String description;
    private double amount;
    private Timestamp createdAt;
}
