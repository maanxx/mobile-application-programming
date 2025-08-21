class Account {
    public ower: string;

    private _balance: number;

    public readonly accountNumber: string;
  
    public constructor(ower: string, balance: number, accountNumber: string) {
        this.ower = ower;
        this._balance = balance;
        this.accountNumber = accountNumber;
    }
  
    // nap tien
    public calDeposit(amount: number): number {
      if (amount <= 0) {
        console.log("Du lieu khong hop le!");
      }
  
      this._balance += amount;
  
      return this._balance;
    }
  
    // rut tien
    public calWithdraw(amount: number): number {
      if (amount <= this._balance) {
        console.log("So tien phai lon hon 0");
      }
  
      if (amount > this._balance) {
        console.log("So du khong du de rut");
      }
  
      this._balance -= amount;
  
      return this._balance;
    }
  
    public getBalance(): number {
      return this._balance;
    }
  }
  
  let acc = new Account("Man", 1000, "00000");

  console.log("Chu tk: " + acc.ower);
  console.log("So du: " + acc.getBalance());
  console.log("ID: " + acc.accountNumber);

  console.log("So tien hien tai: " + acc.getBalance());
  console.log("Nap tien vao tk: " + acc.calDeposit(100));
  console.log("So tien hien tai sau khi nap: " + acc.getBalance());

  console.log("Rut tien khoi tk: " + acc.calWithdraw(1000));
  console.log("So tien hien tai sau khi rut: " + acc.getBalance());
  
  