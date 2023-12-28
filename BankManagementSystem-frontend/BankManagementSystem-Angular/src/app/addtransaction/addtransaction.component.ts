import { Component,OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit
{
  constructor(private transactionService:TransactionService,private router:Router){}
  transaction:Transaction=new Transaction();

  ngOnInit(): void 
  {
    
  }

  createTransaction()
  {
    this.transactionService.saveTransaction(this.transaction).subscribe(data=>{console.log(data);this.gototransactionlist()},error=>console.log(error));
  }
  gototransactionlist()
  {
    this.router.navigate(['/transaction/getdetails']);
  }
  onSubmit()
  {
    this.createTransaction();
  }

}
