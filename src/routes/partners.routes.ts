import { Router } from 'express';
import { Partner } from '../domain/features/partners/Partner';

const partnerRoutes = Router();

const partners: Partner[] = []

partnerRoutes.post('/', (request, response) => {
    const { firstName, lastName, email } = request.body;

    const partner = new Partner(
        firstName, 
        lastName, 
        email
        );

    partners.push(partner);

    return response.status(201).send(partner);
})

export { partnerRoutes };