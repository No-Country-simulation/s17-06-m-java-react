package com.payout.budget_movements_service.exceptions;

import lombok.Data;

@Data
public class BudgetMovementNotFoundException extends RuntimeException {
    public BudgetMovementNotFoundException(Long id) {
        super("Budget movement not found with id: " + id);
    }
}
