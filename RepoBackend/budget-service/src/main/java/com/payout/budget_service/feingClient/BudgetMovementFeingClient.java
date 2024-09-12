package com.payout.budget_service.feingClient;

import com.payout.budget_service.models.BudgetMovement;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "budget-movements-service",url = "http://localhost:8089")
public interface BudgetMovementFeingClient {

    @GetMapping("/budget-movements/AllById/{id_budget}")
    List<BudgetMovement> getAllMovementsById(@PathVariable("id_budget") Long id);

    @PostMapping("/budget-movements/create")
    BudgetMovement createMovement(@RequestBody BudgetMovement movement);

    @DeleteMapping("/budget-movements/{id}")
    Void deleteMovement(@PathVariable("id") Long id);
}
