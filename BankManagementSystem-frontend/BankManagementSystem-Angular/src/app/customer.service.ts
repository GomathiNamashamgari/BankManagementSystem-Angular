import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService 
{
  private baseUrl = 'http://localhost:8080/api'; 
  constructor(private httpClient:HttpClient) { }

  getCustomerById(customerId: number): Observable<any> {
    const url = `${this.baseUrl}/customer/${customerId}`;

    return this.httpClient.get<any>(url).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }

  
}

