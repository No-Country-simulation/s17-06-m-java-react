package com.payout.budget_movements_service.repository;

import com.payout.budget_movements_service.models.BudgetMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetMovementRepository extends JpaRepository<BudgetMovement, Long> {
    List<BudgetMovement> findByBudgetId(Long budgetId);
}
