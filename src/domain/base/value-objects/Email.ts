export class Email {
  private _address: string;

  constructor(address: string) {
    this._address = address
  }

  get address() { return this._address; }
}