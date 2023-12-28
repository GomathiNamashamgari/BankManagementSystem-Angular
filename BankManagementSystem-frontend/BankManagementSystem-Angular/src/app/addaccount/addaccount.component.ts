import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit
{

  constructor(private accountdetailsService:AccountService,private router:Router){}
  account:Account=new Account();
  

  ngOnInit(): void 
  {
    
  }

  createAccount()
  {
    this.accountdetailsService.saveAccount(this.account).subscribe(data=>{console.log(data);this.gotoaccountlist()},error=>console.log(error)
    );
  }
  gotoaccountlist()
  {
    this.router.navigate(["/account/getdetails"]);
  }
  onSubmit()
  {
    this.createAccount();
  }
  
}