// src/app/services/account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/api'; 
  

  constructor(private http: HttpClient) { }

  getAccountById(accountId: number): Observable<Account> {
    const url = `${this.baseUrl}/account/${accountId}`;
    return this.http.get<Account>(url);
  }

  deposit(accountId: number,depositAmount: number): Observable<any> {
    const url = `${this.baseUrl}/account/${accountId}/deposit/${depositAmount}`;
    return this.http.post(url, null);
  }

  withdraw(accountId: number, withdrawAmount: number): Observable<any> {
    const url = `${this.baseUrl}/account/${accountId}/withdraw/${withdrawAmount}`;
    return this.http.post(url, null);
  }
}
