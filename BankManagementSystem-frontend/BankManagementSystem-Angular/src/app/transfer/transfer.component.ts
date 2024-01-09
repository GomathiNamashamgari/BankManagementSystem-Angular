import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  fromAccountId!: number;
  toAccountId!:number;
  depositAmount!: number;
  withdrawAmount!: number;

  showNotification: boolean = false;
  notificationMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.fromAccountId = Number(this.route.snapshot.paramMap.get('fromaccountId'));
    this.toAccountId = Number(this.route.snapshot.paramMap.get('toAccountId'));
  }

  deposit() {
    console.log('Deposit payload:', { fromAccountId: this.fromAccountId,toAccountId: this.toAccountId ,depositAmount: this.depositAmount });
  
    this.accountService.deposit(this.fromAccountId,this.toAccountId, this.depositAmount).subscribe(
      (response: any) => {
        console.log('Deposit response:', response);

        this.showNotification = true;
        this.notificationMessage = 'Deposit Successful!';

        this.loadTransactions();
      },
      
    );
  }

  withdraw() {
    console.log('Withdraw payload:', { fromAccountId: this.fromAccountId,toAccountId: this.toAccountId, withdrawAmount: this.withdrawAmount });
    
    this.accountService.withdraw(this.fromAccountId,this.toAccountId, this.withdrawAmount).subscribe(
      () => {
        console.log('Withdrawal successful');

        this.showNotification = true;
        this.notificationMessage = 'Withdraw Successful!';
        
        this.loadTransactions();
      },
      
    );
  }
  

  loadTransactions() {
    // Use this.fromAccountId and this.toAccountId to get transactions for both accounts
    this.transactionService.getTransactionsByAccount(this.fromAccountId).subscribe(
      (fromAccountTransactions) => {
        console.log('Transactions for fromAccountId:', fromAccountTransactions);
  
        // Now fetch transactions for toAccountId
        this.transactionService.getTransactionsByAccount(this.toAccountId).subscribe(
          (toAccountTransactions) => {
            console.log('Transactions for toAccountId:', toAccountTransactions);
  
            // You can handle the transactions for both accounts as needed
          },
          (error) => {
            console.error('Error fetching transactions for toAccountId:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching transactions for fromAccountId:', error);
      }
    );
  }
}