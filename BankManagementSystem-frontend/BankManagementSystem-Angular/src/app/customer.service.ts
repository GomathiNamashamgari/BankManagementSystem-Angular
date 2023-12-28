import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService
 {
  private baseUrl1='http://localhost:8080/customer/getallrecords'
  private baseUrl2='http://localhost:8080/customer/insertdetails'
  private baseUrl3='http://localhost:8080/customer/updatedetails'
  private baseUrl4='http://localhost:8080/customer/deleterecords'
  private baseUrl5='http://localhost:8080/customer/getdetails'
  constructor(private httpClient:HttpClient) { }

  getCustDetails():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(`${this.baseUrl1}`);
  }
  saveCustomer(customer:Customer):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl2}`,customer);
  }
  getCustomerById(id:String):Observable<Customer>
  {
    return this.httpClient.get<Customer>(`${this.baseUrl5}/${id}`);
  }
  updateCustomer(id:String,customer:Customer):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,customer);
  }
  deleteCustomer(id:String):Observable<any>
  {
   return this.httpClient.delete(`${this.baseUrl4}/${id}`);
  }
}
