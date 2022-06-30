class BankAccount {
    constructor(agency, number, type) {
    this.agency = agency
    this.number = number
    this.type = type
    this._balance = 0
  }

  get balance() {
    return this._balance
  }

  set balance(value) {
    this._balance = value
  }

  withdraw(value) {
    if (value > this._balance) {
      return 'operation denied'
    }
    this._balance = this._balance - value
    return this._balance
  }

  deposit(value) {
    this._balance = this._balance + value

    return this._balance
  }
}

class CheckingAccount extends BankAccount{
  constructor(agency, number, creditCard) {
    super(agency, number);
    this.type = 'checking';
    this._creditCard = creditCard;
  }

  get creditCard(){
    return this._creditCard;
  }

  set creditCard(value){
    this._creditCard = value;
  }
}

class SavingsAccount extends BankAccount{
    constructor(agency, number) {
      super(agency, number);
      this.type = 'Savings';      
    }
    
  }

  class UniversityAccount extends BankAccount{
    constructor(agency, number) {
      super(agency, number);
      this.type = 'University';      
    }
    withdraw(value) {
        if (value > 500) {
          return 'operation denied'
        }
        this._balance = this._balance - value;
        return this._balance
      }
  }