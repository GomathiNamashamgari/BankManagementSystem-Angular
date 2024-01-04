export class Transaction {
    transactionId: number;
    accountId: number;
    amount: number;
    type: string;
    timestamp: Date;

    constructor(
        transactionId:number,
        accountId:number,
        amount:number,
        type:string,
        timestamp:Date
    )
    {
        this.transactionId=transactionId;
        this.accountId=accountId
        this.amount=amount;
        this.type=type;
        this.timestamp=timestamp;
    }
  }
  