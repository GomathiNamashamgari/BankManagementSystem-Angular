import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit
{
  customers:Customer[]=[];
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService,private router:Router){}
  
  ngOnInit(): void 
  {
    this.getCustDetails();
  }
  private getCustDetails()
  {
    this.customerService.getCustDetails().subscribe(data=>{this.customers=data;});
  }
  updateCustomer(id:String)
  {
    this.router.navigate(['updateCustomer',id]);
  }
  /*deleteCustomer(id:String):void
  {
    this.customerService.deleteCustomer(id).subscribe(data=>{console.log(data);this.getCustDetails})
  }*/
}
