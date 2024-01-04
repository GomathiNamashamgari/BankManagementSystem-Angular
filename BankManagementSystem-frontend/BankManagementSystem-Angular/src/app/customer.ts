export class Customer {
    customerId: number;
    name: string;
    dateofbirth: Date;
    email:String;
    contact: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  
    constructor(
      customerId: number,
      name: string,
      dateofbirth: Date,
      email:String,
      contact: string,
      address: string,
      city: string,
      state: string,
      pincode: string
    ) {
      this.customerId = customerId;
      this.name = name;
      this.dateofbirth = dateofbirth;
      this.email=email;
      this.contact = contact;
      this.address = address;
      this.city = city;
      this.state = state;
      this.pincode = pincode;
    }
  }
  