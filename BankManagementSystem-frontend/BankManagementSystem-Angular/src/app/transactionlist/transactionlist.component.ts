import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit
{
  transactions:Transaction[]=[];

  constructor(private transactionService:TransactionService,private router:Router){}

  ngOnInit(): void 
  {
    this.getAllTransactions();
  }
  private getAllTransactions()
  {
    this.transactionService.getalltransactions().subscribe(data=>{this.transactions=data;});
  }
  updateTransaction(id:String)
  {
    this.router.navigate(['updateTransaction',id]);
  }
  /*deleteTransaction(id:String):void
  {
    this.transactionService.deleteTransaction(id).subscribe(data=>{console.log(data);this.getAllTransactions();})
  }*/

}