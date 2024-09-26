package com.payout.budget_movements_service.service;

import com.payout.budget_movements_service.models.BudgetMovement;

import java.util.List;

public interface BudgetMovementService {
    List<BudgetMovement> findByIdBudget(Long id);
    BudgetMovement createMovement (BudgetMovement movement);
    void deleteMovement (Long id);
}
