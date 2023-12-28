import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManager } from '../branch-manager';
import { BranchManagerService } from '../branch-manager.service';

@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent implements OnInit
{
  managerId!:String;
  branchmanager:BranchManager=new BranchManager();
  msg:any="";

  constructor(private branchmanagerService:BranchManagerService,private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void 
  {
    this.branchmanager=new BranchManager();
    this.managerId=this.route.snapshot.params['managerId'];
    this.branchmanagerService.getBranchById(this.managerId).subscribe(data=>{this.branchmanager=data;})
  }
  onSubmit()
      {
        this.updateBranch();
      }
      updateBranch()
      {
        console.log(this.branchmanager.branchId)
        this.branchmanagerService.updateBranch(this.branchmanager.branchId,this.branchmanager).subscribe(data=>
          {this.gotobanklist()});
      }
      gotobanklist()
      {
        this.router.navigate(['/getAllBranchDetails']);
      }

}