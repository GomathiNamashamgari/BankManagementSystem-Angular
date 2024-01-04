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

  accountId!: number;
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
    this.accountId = Number(this.route.snapshot.paramMap.get('accountId'));
  }

  deposit() {
    console.log('Deposit payload:', { accountId: this.accountId, depositAmount: this.depositAmount });
  
    this.accountService.deposit(123456789, this.depositAmount).subscribe(
      (response: any) => {
        console.log('Deposit response:', response);

        this.showNotification = true;
        this.notificationMessage = 'Deposit Successful!';

        this.loadTransactions();
      },
      
    );
  }

  withdraw() {
    console.log('Withdraw payload:', { accountId: this.accountId, withdrawAmount: this.withdrawAmount });
    
    this.accountService.withdraw(123456789, this.withdrawAmount).subscribe(
      () => {
        console.log('Withdrawal successful');

        this.showNotification = true;
        this.notificationMessage = 'Withdraw Successful!';
        
        this.loadTransactions();
      },
      
    );
  }
  

  loadTransactions() {
    this.transactionService.getTransactionsByAccount(123456789).subscribe(
      (data) => {
        console.log('Transaction history refreshed:', data);
      },
      
    );
  }  
}
