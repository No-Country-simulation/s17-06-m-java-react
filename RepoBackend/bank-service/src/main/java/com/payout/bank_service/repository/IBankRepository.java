package com.payout.bank_service.repository;

import com.payout.bank_service.model.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBankRepository extends JpaRepository<Bank,Long> {


}
