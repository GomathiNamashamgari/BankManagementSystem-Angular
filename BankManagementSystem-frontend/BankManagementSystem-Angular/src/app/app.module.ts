import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BanklistComponent,
    AddbankComponent,
    UpdatebankComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    AccountlistComponent,
    AddaccountComponent,
    UpdateaccountComponent,
    TransactionlistComponent,
    AddtransactionComponent,
    UpdatetransactionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
