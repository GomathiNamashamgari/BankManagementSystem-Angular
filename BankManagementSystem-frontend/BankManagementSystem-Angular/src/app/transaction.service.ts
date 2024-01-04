// src/app/services/transaction.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  getTransactionsByAccount(accountId: number): Observable<Transaction[]> {
    const url = `${this.baseUrl}/transaction/account/${accountId}`;
    return this.http.get<Transaction[]>(url);
  }
}
