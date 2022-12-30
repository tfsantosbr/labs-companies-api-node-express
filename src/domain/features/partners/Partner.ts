import { v4 as uuid } from 'uuid';
import { CompleteName } from '../../base/value-objects/CompleteName';
import { Email } from '../../base/value-objects/Email';

export class Partner {
    private _id: string;
    private _completeName: CompleteName;
    private _email: Email;

    constructor(completeName: CompleteName, email: Email, id: string = null) {
        this._id = id ?? uuid();
        this._completeName = completeName;
        this._email = email;
    }

    get id() { return this._id; }
    get completeName() { return this._completeName; }
    get email() { return this._email; }
}