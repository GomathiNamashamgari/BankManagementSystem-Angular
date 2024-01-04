// src/app/account-details/account-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accountId!: number;
  account!: Account;
  depositAmount!: number;  
  withdrawAmount!: number; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountId = Number(this.route.snapshot.paramMap.get('accountId'));
    this.loadAccountDetails();
  }

  loadAccountDetails() {
    this.accountService.getAccountById(123456789).subscribe(
      (data) => {
        this.account = data;
      },
      
    );
    this.router.navigate(['/account-details', this.accountId]);

  }

  navigateToTransfer() {
    this.router.navigate(['/transfer', this.accountId]);
  }
}
