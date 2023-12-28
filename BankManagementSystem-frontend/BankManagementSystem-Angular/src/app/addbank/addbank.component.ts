import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchManagerService } from '../branch-manager.service';
import { BranchManager } from '../branch-manager';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit {

  constructor(private branchmanagerService:BranchManagerService,private router:Router){}

  branchmanager:BranchManager=new BranchManager();


  ngOnInit():void {
    
  }

  savebank()
  {
    this.branchmanagerService.saveBranch(this.branchmanager).subscribe(data=>{console.log(data);
      this.gotobankList()},error=>console.log(error));
  }
  gotobankList()
   {
    this.router.navigate(['getallBranchDetails']);
   }
   onSubmit()
   {
    this.savebank();
   }

}
