import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerId!: number;
  customer:  any;
  

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customer = {
      customerId: '',
      name: '',
      dateofbirth: '',
      email:'',
      contact: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    };
    this.loadCustomerDetails(this.customerId);
    }
  
    private loadCustomerDetails(customerId: number) {
      this.customerService.getCustomerById(1).subscribe(
        (data: any) => {
          this.customer = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }