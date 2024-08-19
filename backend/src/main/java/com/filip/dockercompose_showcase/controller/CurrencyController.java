package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.dto.CurrencyDTO;
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
    public List<CurrencyDTO> getAllCurrencies() {
        return currencyService.findAll();
    }

    @GetMapping("/{currencyId}")
    public ResponseEntity<CurrencyDTO> getCurrencyById(@PathVariable String currencyId) {
        return currencyService.findById(currencyId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CurrencyDTO createCurrency(@RequestBody CurrencyDTO currencyDTO) {
        return currencyService.save(currencyDTO);
    }

    @PutMapping("/{currencyId}")
    public ResponseEntity<CurrencyDTO> updateCurrency(@PathVariable String currencyId, @RequestBody CurrencyDTO currencyDTO) {
        return ResponseEntity.ok(currencyService.update(currencyId, currencyDTO));
    }

    @DeleteMapping("/{currencyId}")
    public ResponseEntity<Void> deleteCurrency(@PathVariable String currencyId) {
        currencyService.deleteById(currencyId);
        return ResponseEntity.noContent().build();
    }
}
