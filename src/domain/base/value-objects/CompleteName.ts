export class CompleteName {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName() { return this._firstName; }
    public get lastName() { return this._lastName; }
}