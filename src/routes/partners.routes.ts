import { CompleteName } from './../domain/base/value-objects/CompleteName';
import { Router } from 'express';
import { CompleteName } from '../domain/base/value-objects/CompleteName';
import { Email } from '../domain/base/value-objects/Email';
import { CreatePartner } from '../domain/features/partners/models/CreatePartner';
import { PartnerItem } from '../domain/features/partners/models/PartnerItem';
import { Partner } from '../domain/features/partners/Partner';

const partnerRoutes = Router();

const partners: Partner[] = []

partnerRoutes.post('/', (request, response) => {
  const { firstName, lastName, email }: CreatePartner = request.body;

  const partner = new Partner(
    new CompleteName(firstName, lastName),
    new Email(email),
  );

  console.log(partner.id);
  console.log(partner.email.address);
  console.log(partner.completeName.firstName);
  console.log(partner.completeName.lastName);

  partners.push(partner);

  const createdPartner = new PartnerItem();
  createdPartner.id = partner.id;
  createdPartner.name = partner.completeName.toString();
  createdPartner.email = partner.email.address;

  return response.status(201).send(createdPartner);
})

export { partnerRoutes };