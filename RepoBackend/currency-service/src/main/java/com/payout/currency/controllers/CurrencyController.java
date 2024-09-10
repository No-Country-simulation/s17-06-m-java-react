package com.payout.currency.controllers;

import com.payout.currency.models.Currency;
import com.payout.currency.services.CurrencyService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/currency")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @GetMapping
    public List<Currency> getAllCurrencies() {
        return currencyService.getAllCurrencies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Currency> getCurrencyById(@PathVariable(value = "id") Long idCurrency) {
        Currency currency = currencyService.getCurrencyById(idCurrency)
                .orElseThrow(() -> new ResourceNotFoundException("Currency not found for this id :: " + idCurrency));
        return ResponseEntity.ok().body(currency);
    }

    @PostMapping
    public Currency createCurrency(@RequestBody Currency currency) {
        return currencyService.createCurrency(currency);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Currency> updateCurrency(@PathVariable(value = "id") Long idCurrency, @RequestBody Currency currencyDetails) {
        Currency updatedCurrency = currencyService.updateCurrency(idCurrency, currencyDetails);
        return ResponseEntity.ok(updatedCurrency);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCurrency(@PathVariable(value = "id") Long idCurrency) {
        currencyService.deleteCurrency(idCurrency);
        return ResponseEntity.noContent().build();
    }
}