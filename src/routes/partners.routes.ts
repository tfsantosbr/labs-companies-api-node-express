import { Router } from 'express';
import { CompleteName } from '../domain/base/value-objects/CompleteName';
import { Email } from '../domain/base/value-objects/Email';
import { Partner } from '../domain/features/partners/Partner';

const partnerRoutes = Router();

const partners: Partner[] = []

partnerRoutes.post('/', (request, response) => {
    const { firstName, lastName, email } = request.body;

    const partner = new Partner(
        new CompleteName(firstName, lastName),
        new Email(email),
    );

    console.log(partner.id);
    console.log(partner.email.address);
    console.log(partner.completeName.firstName);
    console.log(partner.completeName.lastName);

    partners.push(partner);

    return response.status(201).send(partner);
})

export { partnerRoutes };