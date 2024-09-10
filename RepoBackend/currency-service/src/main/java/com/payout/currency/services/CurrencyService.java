package com.payout.currency.services;


import com.payout.currency.models.Currency;
import com.payout.currency.repository.CurrencyRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CurrencyService {

    @Autowired
    private CurrencyRepository currencyRepository;

    public List<Currency> getAllCurrencies() {
        return currencyRepository.findAll();
    }

    public Optional<Currency> getCurrencyById(Long idCurrency) {
        return currencyRepository.findById(idCurrency);
    }

    public Currency createCurrency(Currency currency) {
        return currencyRepository.save(currency);
    }

    public Currency updateCurrency(Long idCurrency, Currency currencyDetails) {
        Currency currency = currencyRepository.findById(idCurrency)
                .orElseThrow(() -> new ResourceNotFoundException("Currency not found for this id :: " + idCurrency));

        currency.setDescription(currencyDetails.getDescription());
        return currencyRepository.save(currency);
    }

    public void deleteCurrency(Long idCurrency) {
        Currency currency = currencyRepository.findById(idCurrency)
                .orElseThrow(() -> new ResourceNotFoundException("Currency not found for this id :: " + idCurrency));

        currencyRepository.delete(currency);
    }
}