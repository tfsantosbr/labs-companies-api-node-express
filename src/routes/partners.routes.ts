import { IPartnerRepository } from './../domain/features/partners/repositories/IPartnerRepository';
import { PartnerRepository } from './../infrastructure/Repositories/PartnerRepository';
import { Router } from 'express';
import { Email } from '../domain/base/value-objects/Email';
import { CreatePartner } from '../domain/features/partners/models/CreatePartner';
import { PartnerItem } from '../domain/features/partners/models/PartnerItem';
import { Partner } from '../domain/features/partners/Partner';
import { CompleteName } from '../domain/base/value-objects/CompleteName';
import { ok } from 'assert';
import { send } from 'process';

const partnerRoutes = Router();
const partnerRepository: IPartnerRepository = new PartnerRepository();

partnerRoutes.get('/', (_, response) => {
  const partners = partnerRepository.list();

  return response.status(200).send(partners);
})

partnerRoutes.post('/', (request, response) => {
  const { firstName, lastName, email }: CreatePartner = request.body;

  const partner = new Partner(
    new CompleteName(firstName, lastName),
    new Email(email),
  );

  partnerRepository.add(partner);

  const createdPartner = new PartnerItem();
  createdPartner.id = partner.id;
  createdPartner.name = partner.completeName.toString();
  createdPartner.email = partner.email.address;

  return response.status(201).send(createdPartner);
})

partnerRoutes.delete('/:partnerId', (request, response) => {
  const partnerId = request.params.partnerId;

  const partner = partnerRepository.getById(partnerId);

  if (!partner)
    return response.status(404).send({
      code: 'PARTNER_NOT_FOUND',
      message: 'Partner not found'
    });

  partnerRepository.remove(partner);

  return response.status(204).send();
})

export { partnerRoutes };