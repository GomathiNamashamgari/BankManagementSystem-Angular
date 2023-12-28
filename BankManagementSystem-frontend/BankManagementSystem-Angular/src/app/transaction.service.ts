import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl1='http://localhost:8080/transaction/getdetails'
  private baseUrl2='http://localhost:8080/transaction/insertdetails'
  private baseUrl3='http://localhost:8080/transaction/updatedetails'
  private baseUrl4='http://localhost:8080/transaction/deletedetails'
  
  constructor(private httpClient:HttpClient) { }

  getalltransactions():Observable<Transaction[]>
  {
    return this.httpClient.get<Transaction[]>(`${this.baseUrl1}`);
  }
  saveTransaction(transaction:Transaction):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl2}`,transaction);
  }
  getTransactionById(id:String):Observable<Transaction>
  {
    return this.httpClient.get<Transaction>(`${this.baseUrl1}/${id}`);
  }
  updateTransaction(id:String,transaction:Transaction):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,transaction);
  }
  deleteTransaction(id:String):Observable<any>
  {
    return this.httpClient.delete(`${this.baseUrl4}/${id}`)
  }
}