class BankAccount {
  private balance: number;

  public constructor(balance: number = 0) {
    this.balance = balance;
  }

  // nap tien
  public calDeposit(amount: number): number {
    if (amount <= 0) {
      console.log("Du lieu khong hop le!");
    }

    this.balance += amount;

    return this.balance;
  }

  // rut tien
  public calWithdraw(amount: number): number {
    if (amount <= this.balance) {
      console.log("So tien phai lon hon 0");
    }

    if (amount > this.balance) {
      console.log("So du khong du de rut");
    }

    this.balance -= amount;

    return this.balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

let bank = new BankAccount(1000);
console.log("So tien hien tai: " + bank.getBalance());
console.log("Nap tien vao tk: " + bank.calDeposit(100));
console.log("So tien hien tai sau khi nap: " + bank.getBalance());
console.log("Rut tien khoi tk: " + bank.calWithdraw(1000));
console.log("So tien hien tai sau khi rut: " + bank.getBalance());

