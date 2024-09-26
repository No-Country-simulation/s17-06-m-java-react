package com.payout.budget_movements_service.controller;

import com.payout.budget_movements_service.exceptions.BadRequestException;
import com.payout.budget_movements_service.models.BudgetMovement;
import com.payout.budget_movements_service.service.BudgetMovementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/budget-movements")
public class BudgetMovementController {

    @Autowired
    private BudgetMovementService budgetMovementService;

    @GetMapping("/AllById/{id_budget}")
    public ResponseEntity<List<BudgetMovement>> getAllMovementsById(@PathVariable("id_budget") Long id){
        if(id<=0){
            throw new BadRequestException("Id cannot be less than or equal to 0");
        }

        return ResponseEntity.ok(budgetMovementService.findByIdBudget(id));
    }

    @PostMapping("/create")
    public ResponseEntity<BudgetMovement> createMovement(@RequestBody BudgetMovement movement){
        return ResponseEntity.ok(budgetMovementService.createMovement(movement));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovement(@PathVariable("id") Long id){
        if(id<=0){
            throw new BadRequestException("Id cannot be less than or equal to 0");
        }
        budgetMovementService.deleteMovement(id);
        return ResponseEntity.ok().build();
    }
}
