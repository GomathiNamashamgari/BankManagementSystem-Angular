import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl1='http://localhost:8080/account/getdetails'
  private baseUrl2='http://localhost:8080/account/insertdetails'
  private baseUrl3='http://localhost:8080/account/updatedetails'
  private baseUrl4='http://localhost:8080/account/deletedetails'
  private baseUrl5='http://localhost:8080/account/getalldetails'
  constructor(private httpClient:HttpClient) { }

  getallAccounts():Observable<Account[]>
  {
    return this.httpClient.get<Account[]>(`${this.baseUrl1}`);
  }
  saveAccount(account:Account):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl2}`,account);
  }
  getAccountById(accountnumber:String):Observable<Account>
  {
    return this.httpClient.get<Account>(`${this.baseUrl5}/${accountnumber}`);
  }
  updateAccount(accountnumber:String,account:Account):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl3}/${accountnumber}`,account);
  }
  deleteAccount(accountnumber:String):Observable<any>
  {
   return this.httpClient.delete(`${this.baseUrl4}/${accountnumber}`);
  }

}