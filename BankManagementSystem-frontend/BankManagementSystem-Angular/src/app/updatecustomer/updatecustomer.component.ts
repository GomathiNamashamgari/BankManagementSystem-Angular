import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerupdate',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit
{
  id!:String;
  customer:Customer=new Customer();
  

  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void 
  {
    this.customer=new Customer();
    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{this.customer=data;});
  }
  onSubmit()
  {
    this.customerupdate();
  }
  customerupdate()
  {
    this.customerService.updateCustomer(this.id,this.customer).subscribe(data=>{this.gotocustomerlist()});
  }
  gotocustomerlist()
  {
    this.router.navigate(['/getCustDetails']);
  }
}
