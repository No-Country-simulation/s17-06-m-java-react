package com.payout.budget_service.controller;


import com.payout.budget_service.models.Budget;
import com.payout.budget_service.models.BudgetMovement;
import com.payout.budget_service.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/budget")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Budget>> getBudgetsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(budgetService.getBudgetsByUserId(userId));
    }

    @PostMapping("/create")
    public ResponseEntity<Budget> createBudget(@RequestBody Budget budget) {
        return ResponseEntity.ok(budgetService.createBudget(budget));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Budget> updateBudget(@PathVariable Long id, @RequestBody Budget budget) {
        return ResponseEntity.ok(budgetService.updateBudget(id, budget));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        budgetService.deleteBudget(id);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/movements/{budgetId}")
    public ResponseEntity<List<BudgetMovement>> getBudgetMovementByBudgetId(@PathVariable Long budgetId) {
        return ResponseEntity.ok(budgetService.getBudgetMovementByBudgetId(budgetId));
    }
    @GetMapping("/actual-amount/{budgetId}")
    public ResponseEntity<Double> getActualBudgetAmount(@PathVariable Long budgetId) {
        return ResponseEntity.ok(budgetService.getActualBudgetAmount(budgetId));
    }
    @PostMapping("/createmovement/{id_budget}")
    public ResponseEntity<BudgetMovement> createBudgetMovement(@PathVariable Long id_budget,@RequestBody BudgetMovement budgetMovement) {
        return ResponseEntity.ok(budgetService.createBudgetMovement(id_budget, budgetMovement));
    }
}
