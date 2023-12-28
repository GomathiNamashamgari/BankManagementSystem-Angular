import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BranchManager } from './branch-manager';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerService 
{
  private baseUrl1='http://localhost:8080/branch/getdetails'
  private baseUrl2='http://localhost:8080/branch/insertdetails'
  private baseUrl3='http://localhost:8080/branch/updatedetails'
  private baseUrl4='http://localhost:8080/branch/deletedetails'
  private baseUrl5='http://localhost:8080/branch/getalldetails'

  constructor(private httpClient:HttpClient) {}

  getallBranch():Observable<BranchManager[]>
  {
    return this.httpClient.get<BranchManager[]>(`${this.baseUrl1}`);
  }
  saveBranch(branch:BranchManager):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl2}`,branch);
  }   
  getBranchById(managerId:String):Observable<BranchManager>
  {
    return this.httpClient.get<BranchManager>(`${this.baseUrl5}/${managerId}`);
  }

  updateBranch(managerId:String,branch:BranchManager):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl3}/${managerId}`,branch);
  }
  /*deleteBranch(managerId:String):Observable<any>
  {
   return this.httpClient.delete(`${this.baseUrl4}/branchmanagers/${managerId}`);
  }*/
}
