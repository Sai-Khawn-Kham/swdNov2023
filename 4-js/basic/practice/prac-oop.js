//create back acc class with check balance, deposit, transfer, withdraw methods
//notify if the acc don't have enough money to transfer and withdraw

class Bankacc{
    #balance = 0;
    checkBal(){
        return `Your balance is ${this.#balance}`;
    }
    deposit(deposit){
        this.#balance += deposit;
        return `You deposit ${deposit}
        Your balance is ${this.#balance} now`;
    }
    transfer(amount,whom){
        if(amount>this.#balance){
            return `You don't have enough money`;
        }
        this.#balance -= amount;
        return `You transfer ${amount} to ${whom}
        Your balance is ${this.#balance} now`;
    }
    withdraw(amount){
        if(amount>this.#balance){
            return `You don't have enough money`;
        }
        this.#balance -= amount;
        return `You withdraw ${amount} from your bank account
        Your balance is ${this.#balance} now`;
    }
}

const ba1 = new Bankacc();
console.log(ba1.checkBal());
console.log(ba1.deposit(5000));
console.log(ba1.deposit(5000));
console.log(ba1.transfer(3000,"kyaw kyaw"));
console.log(ba1.transfer(10000,'aye aye'));
console.log(ba1.withdraw(7000));