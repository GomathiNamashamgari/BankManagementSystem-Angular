import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit
{
  constructor(private customerService:CustomerService,private router:Router){}
  customer:Customer=new Customer();
  

  ngOnInit(): void 
  {
    
  }
  addcustomer()
  {
    this.customerService.saveCustomer(this.customer).subscribe(data=>{console.log(data);this.gotocustomerlist()},error=>console.log(error));
  }
  gotocustomerlist()
  {
    this.router.navigate(['/customer/getallrecords']);
  }
  onSubmit()
  {
    this.addcustomer();
  }
}