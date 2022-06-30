class BankAccount {
    constructor(agency, number, type, balance) {
    this.agency = agency
    this.number = number
    this.type = type
    this._balance = balance
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

class CheckingAccount {
  constructor(agency, number, balance, creditCard) {
    super(agency, number, balance);
    this.type = 'checking';
    this._creditCard = creditCard;
  }

  get creditCard(){
    retur this._creditCard;
  }

  set creditCard(value){
    this._creditCard = value;
  }
}

class SavingsAccount {
    constructor(agency, number, balance) {
      super(agency, number, balance);
      this.type = 'Savings';      
    }
    
  }

  class UniversityAccount {
    constructor(agency, number, balance) {
      super(agency, number, balance);
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