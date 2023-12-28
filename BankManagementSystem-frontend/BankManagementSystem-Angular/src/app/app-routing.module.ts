import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BanklistComponent } from './banklist/banklist.component';
import { AddbankComponent } from './addbank/addbank.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { UpdatetransactionComponent } from './updatetransaction/updatetransaction.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'getAllBranchDetails',component:BanklistComponent},
  {path:'savebank',component:AddbankComponent},
  {path:'updatebank/:managerId',component:UpdatebankComponent},
  {path:'getCustDetails',component:CustomerlistComponent},
  {path:'saveCustomer',component:AddcustomerComponent},
  {path:'updateCustomer/:id',component:UpdatecustomerComponent},
  {path:'getAllAccount',component:AccountlistComponent},
  {path:'saveAccount',component:AddaccountComponent},
  {path:'updateAccount/:accountNumber',component:UpdateaccountComponent},
  {path:'getalltransaction',component:TransactionlistComponent},
  {path:'savetransaction',component:AddtransactionComponent},
  {path:'updateTransaction/:id',component:UpdatetransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
