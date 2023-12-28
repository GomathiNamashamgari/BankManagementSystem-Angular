import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.css']
})
export class UpdatetransactionComponent implements OnInit
{
  id!:String;
  transaction:Transaction=new Transaction();

  constructor(private transactionService:TransactionService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void 
  {
    this.transaction=new Transaction();
    this.id=this.route.snapshot.params['id'];
    this.transactionService.getTransactionById(this.id).subscribe(data=>{this.transaction=data;});
  }
  onSubmit()
  {
    this.TransactionUpdate();
  }
  TransactionUpdate()
  {
    this.transactionService.updateTransaction(this.id,this.transaction).subscribe(data=>{this.gototransactionlist()});
  }
  gototransactionlist()
  {
    this.router.navigate(['/getalltransaction']);
  }

}