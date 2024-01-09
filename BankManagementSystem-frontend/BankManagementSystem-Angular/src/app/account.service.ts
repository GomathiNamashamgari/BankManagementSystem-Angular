// src/app/services/account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    // Handle the error as per your application's requirements
  }
  private baseUrl = 'http://localhost:8080/api/account'; 
  

  constructor(private http: HttpClient) { }

  getAccountById(accountId: number): Observable<Account> {
    const url = `${this.baseUrl}/${accountId}`;
    return this.http.get<Account>(url);
  }

  deposit(fromAccountId: number, toAccountId: number, depositAmount: number): Observable<any> {
    const url = `${this.baseUrl}/deposit/${fromAccountId}/${toAccountId}/${depositAmount}`;
    return this.http.post(url, null).pipe(
      catchError((error: any) => {
        this.handleError(error);
        throw error; // re-throw the error to propagate it further
      })
    );
  }
  
  withdraw(fromAccountId: number, toAccountId: number, withdrawAmount: number): Observable<any> {
    const url = `${this.baseUrl}/withdraw/${fromAccountId}/${toAccountId}/${withdrawAmount}`;
    return this.http.post(url, null).pipe(
      catchError((error: any) => {
        this.handleError(error);
        throw error; // re-throw the error to propagate it further
      })
    );
  }
}