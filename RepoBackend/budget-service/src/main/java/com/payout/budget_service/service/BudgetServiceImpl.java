package com.payout.budget_service.service;

import com.payout.budget_service.feingClient.BudgetMovementFeingClient;
import com.payout.budget_service.models.Budget;
import com.payout.budget_service.models.BudgetMovement;
import com.payout.budget_service.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Service
public class BudgetServiceImpl implements BudgetService{

    @Autowired
    private BudgetRepository budgetRepository;
    @Autowired
    private BudgetMovementFeingClient budgetMovementFeingClient;

    public List<Budget> getBudgetsByUserId(Long userId) {
        return budgetRepository.findByIdUser(userId);
    }

    public Budget createBudget(Budget budget) {
        budget.setCreatedAt(Timestamp.valueOf(java.time.LocalDateTime.now()));
        return budgetRepository.save(budget);
    }

    public Budget updateBudget(Long id, Budget budgetDetails) {
        Budget budget = budgetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Budget not found"));

        budget.setName(budgetDetails.getName());
        budget.setStartDate(budgetDetails.getStartDate());
        budget.setEndDate(budgetDetails.getEndDate());
        budget.setMaxAmount(budgetDetails.getMaxAmount());

        return budgetRepository.save(budget);
    }

    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }

    public List<BudgetMovement> getBudgetMovementByBudgetId(Long budgetId) {
        return budgetMovementFeingClient.getAllMovementsById(budgetId);
    }

    public double getActualBudgetAmount(Long budgetId) {
        List<BudgetMovement> budgetMovements = getBudgetMovementByBudgetId(budgetId);
        double totalAmount = 0;
        for (BudgetMovement budgetMovement : budgetMovements) {
            totalAmount = totalAmount + budgetMovement.getAmount();
        }
        return totalAmount;
    }

    public BudgetMovement createBudgetMovement(Long id_budget,BudgetMovement budgetMovement) {
        double actualAmount = getActualBudgetAmount(id_budget);
        double newAmount = actualAmount + budgetMovement.getAmount();
        Budget budget = budgetRepository.findById(id_budget)
                .orElseThrow(() -> new RuntimeException("Budget not found"));
        if (newAmount > budget.getMaxAmount().doubleValue()) {
            throw new RuntimeException("The new amount exceeds the maximum amount of the budget");
        }
        return budgetMovementFeingClient.createMovement(budgetMovement);
    }

    public void deleteBudgetMovement(Long id_budget_movement) {
        budgetMovementFeingClient.deleteMovement(id_budget_movement);
    }
}
