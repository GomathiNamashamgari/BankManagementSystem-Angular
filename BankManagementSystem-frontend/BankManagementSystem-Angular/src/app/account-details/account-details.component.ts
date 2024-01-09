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
  account!: Account | undefined;
  depositAmount!: number;
  withdrawAmount!: number;
  selectedAccountId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.selectedAccountId = Number(this.route.snapshot.paramMap.get('accountId'));
    this.loadAccountDetails();
  }

  loadAccountDetails() {
    if (this.selectedAccountId !== undefined) {
      this.accountService.getAccountById(this.selectedAccountId).subscribe(
        (data) => {
          this.account = data;
        },
        (error) => {
          console.error('Error loading account details:', error);
        }
      );
    }
  }

  onAccountIdChange() {
    if (this.selectedAccountId !== undefined) {
      this.loadAccountDetails();
    }
  }

  navigateToTransfer() {
    if (this.selectedAccountId !== undefined) {
      this.router.navigate(['/transfer', this.selectedAccountId]);
    }
  }
}
