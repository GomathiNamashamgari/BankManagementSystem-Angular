import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit
{
  accounts:Account[]=[];
  accountdetails:Account=new Account();
  constructor(private accountdetailsService:AccountService,private router:Router){}

  
  ngOnInit(): void 
  {
    this.getallAccount();
  }
  private getallAccount()
  {
    this.accountdetailsService.getallAccounts().subscribe(data=>{this.accounts=data;});
  }
  updateAccount(accountnumber:String)
  {
    this.router.navigate(['updateAccount',accountnumber]);
  }
  /*deleteAccount(accountnumber:String):void
  {
    this.accountdetailsService.deleteAccount(accountnumber).subscribe(
      data=>
      {
        console.log(data);
        this.getallAccount();
      }
    )
  }*/
}