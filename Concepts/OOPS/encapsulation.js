class BankAccount{
    #balance = 1000;
    getBalance(){
        return this.#balance;
    }
}

const newAccount = new BankAccount();

console.log(newAccount.getBalance());