package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.entity.CurrencyEntity;
import com.filip.dockercompose_showcase.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/currencies")
public class CurrencyController {

    private final CurrencyService currencyService;

    @Autowired
    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping
    public List<CurrencyEntity> getAllCurrencies() {
        return currencyService.findAll();
    }

    @GetMapping("/{currencyId}")
    public ResponseEntity<CurrencyEntity> getCurrencyById(@PathVariable String currencyId) {
        return currencyService.findById(currencyId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CurrencyEntity createCurrency(@RequestBody CurrencyEntity currency) {
        return currencyService.save(currency);
    }

    @PutMapping("/{currencyId}")
    public ResponseEntity<CurrencyEntity> updateCurrency(@PathVariable String currencyId, @RequestBody CurrencyEntity currency) {
        return ResponseEntity.ok(currencyService.update(currencyId, currency));
    }

    @DeleteMapping("/{currencyId}")
    public ResponseEntity<Void> deleteCurrency(@PathVariable String currencyId) {
        currencyService.deleteById(currencyId);
        return ResponseEntity.noContent().build();
    }
}
