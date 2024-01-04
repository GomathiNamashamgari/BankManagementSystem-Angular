package com.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.model.Account;
import com.bank.service.AccountService;
import com.bank.service.TransactionService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AccountController {

	private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/account/{accountId}")
    public ResponseEntity<Account> getAccount(@PathVariable ("accountId") Long accountId) {
        Account account = accountService.getAccountById(accountId);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @PostMapping("/account/{accountId}/deposit/{amount}")
    public ResponseEntity<String> deposit(@PathVariable ("accountId") Long accountId, @PathVariable ("amount") double amount) 
    {
        try 
        {
            accountService.deposit(accountId, amount);
            return ResponseEntity.ok().body("{\"message\": \"Deposit successful\"}");
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/account/{accountId}/withdraw/{amount}")
    public ResponseEntity<String> withdraw(@PathVariable ("accountId") Long accountId, @PathVariable ("amount") double amount) {
        try 
        {
            accountService.withdraw(accountId, amount);
            return ResponseEntity.ok().body("{\"message\": \"Withdrawal successful\"}");
        } 
        catch (Exception e) 
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
