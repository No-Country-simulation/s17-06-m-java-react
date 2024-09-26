package com.payout.budget_movements_service.service;

import com.payout.budget_movements_service.exceptions.BudgetMovementNotFoundException;
import com.payout.budget_movements_service.models.BudgetMovement;
import com.payout.budget_movements_service.repository.BudgetMovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetMovementServiceImpl implements BudgetMovementService{

    @Autowired
    private BudgetMovementRepository budgetMovementRepository;

    public List<BudgetMovement> findByIdBudget(Long id){
        return budgetMovementRepository.findByBudgetId(id);
    }

    public BudgetMovement createMovement (BudgetMovement movement){
        movement.setCreatedAt(java.sql.Timestamp.valueOf(java.time.LocalDateTime.now()));
        return budgetMovementRepository.save(movement);
    }

    public void deleteMovement (Long id){
        if(budgetMovementRepository.findById(id).isEmpty()){
            throw new BudgetMovementNotFoundException(id);
        }
        budgetMovementRepository.deleteById(id);
    }
}
