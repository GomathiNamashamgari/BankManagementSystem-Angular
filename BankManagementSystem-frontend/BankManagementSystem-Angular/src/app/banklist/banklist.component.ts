import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchManagerService } from '../branch-manager.service';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit
{
  branchmanagers:BranchManager[]=[];
  
  constructor(private branchmanagerService:BranchManagerService,private router:Router){}

  ngOnInit(): void {
      this.getAllBranch();
  }

  getAllBranch()
  {
    this.branchmanagerService.getallBranch().subscribe(data=>{this.branchmanagers=data;});
  }
  updateBranch(managerId:String)
  {
   this.router.navigate(['updatebank',managerId]);
  }
  /*deleteBranch(id:String):void
  {
   this.branchmanagerService.deleteBranch(id).subscribe(
     data=>
     {
       console.log(data);
      this.getAllBranch();
     }
     )*/

}
