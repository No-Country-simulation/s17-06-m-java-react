package com.payout.bank_service.services;

import com.payout.bank_service.dto.BankDto;
import com.payout.bank_service.model.Bank;
import com.payout.bank_service.repository.IBankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BankServiceImpl implements IBankService{

    @Autowired
    private final IBankRepository bankRepository;

    @Override
    public List<Bank> getAllBanks() {
        return bankRepository.findAll();
    }

    @Override
    public Optional<Bank> getBankById(Long id) {
        return bankRepository.findById(id);

    }

    @Override
    public Bank createBank(BankDto bankDto) {
       Bank bank = new Bank();
       bank.setDescription(bankDto.getDescription());
       return bankRepository.save(bank);
    }


    @Override
    public Bank updateBank(Long id,BankDto bankDto) {
        Optional<Bank> bank = bankRepository.findById(id);
        if (bank.isPresent()) {
            Bank updatedBank = bank.get();
            updatedBank.setIdBank(bankDto.getIdBank());
            updatedBank.setUpdatedAt(LocalDateTime.now());
            return bankRepository.save(updatedBank);
        } else {
            throw new RuntimeException("Bank Account not found");
        }
    }

    @Override
    public void deleteBank(Long id) {

    }



}
