import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent  implements OnInit
{
 account:Account=new Account();
 accountNumber!:String;

 constructor(private accountdetailsService:AccountService,private router:Router,private route:ActivatedRoute){}

 ngOnInit(): void 
 {
  this.account=new Account();
  this.accountNumber=this.route.snapshot.params['accountNumber'];
  this.accountdetailsService.getAccountById(this.accountNumber).subscribe(data=>
    {this.account=data;},error=>console.log(console.error()));
 }
 onSubmit()
 {
  this.AccountUpdate();
 }
 AccountUpdate()
 {
   this.accountdetailsService.updateAccount(this.accountNumber,this.account).subscribe(data=>{this.gotoAccountlist()});
 }
 gotoAccountlist()
 {
  this.router.navigate(['getAllAccount']);
 }
}

