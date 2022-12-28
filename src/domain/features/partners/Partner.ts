import { v4 as uuid } from 'uuid';

export class Partner {
    id: string;
    completeName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string, id?: string = null) {
        this.id = id ?? uuid();
        this.completeName = `${firstName} ${lastName}`;
        this.email = email;
    }
}