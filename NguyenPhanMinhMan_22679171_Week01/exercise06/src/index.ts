class User {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }
  // getter
  get name(): string {
    return this._name;
  }
  //setter
  set name(newName: string) {
    this._name = newName;
  }
 
}
