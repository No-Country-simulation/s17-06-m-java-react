package com.payout.budget_service.repository;

import com.payout.budget_service.models.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget,Long> {
    List<Budget> findByIdUser(Long idUser);
}
