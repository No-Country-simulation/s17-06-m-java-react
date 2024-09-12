package com.payout.budget_service.service;

import com.payout.budget_service.models.Budget;
import com.payout.budget_service.models.BudgetMovement;

import java.util.List;

public interface BudgetService {
    List<Budget> getBudgetsByUserId(Long userId);
    Budget createBudget(Budget budget);
    Budget updateBudget(Long id, Budget budgetDetails);
    void deleteBudget(Long id);
    List<BudgetMovement> getBudgetMovementByBudgetId(Long budgetId);
    double getActualBudgetAmount(Long budgetId);
    BudgetMovement createBudgetMovement(Long id_budget,BudgetMovement budgetMovement);
    void deleteBudgetMovement(Long id_budget_movement);

}
