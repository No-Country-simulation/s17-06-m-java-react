package com.payout.bank_service.services;


import com.payout.bank_service.dto.BankDto;
import com.payout.bank_service.model.Bank;

import java.util.List;
import java.util.Optional;

public interface IBankService {

    public List<Bank> getAllBanks();

    public Optional<Bank> getBankById(Long id);

    public Bank createBank(BankDto bankDto);

    public Bank updateBank(Long id, BankDto bankDto);

    public void deleteBank(Long id);


}
