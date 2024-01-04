import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  accountId!: number;
  transactions!: any[];

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.accountId = Number(this.route.snapshot.paramMap.get('accountId'));
    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getTransactionsByAccount(123456789).subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      error => {
        console.error('Error loading transactions:', error);
      }
    );
    this.router.navigate(['/transaction-list']);
  }
}
