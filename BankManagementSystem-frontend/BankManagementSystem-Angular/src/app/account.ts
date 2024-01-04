export class Account {
    accountId:number;
    bankName:string;
    branchArea:string;
    branchCity:string;
    branchState:string;
    branchpincode:string;
    managername:string;
    balance:number;
    type:string;

    constructor(
        accountId:number,
        bankName:string,
        branchArea:string,
        branchCity:string,
        branchState:string,
        branchpincode:string,
        managername:string,
        balance:number,
        type:string
    ){
        this.accountId=accountId;
        this.bankName=bankName;
        this.branchArea=branchArea;
        this.branchCity=branchCity;
        this.branchState=branchState;
        this.branchpincode=branchpincode;
        this.managername=managername;
        this.balance=balance;
        this.type=type;
    }

  }
  

