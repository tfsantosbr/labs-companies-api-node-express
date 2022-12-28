import { Router } from 'express';
import { CompanyMainActivity } from '../domain/features/company-main-activities/CompanyMainActivity';

const companyMainActivityRoutes = Router();

const companyMainActivities: CompanyMainActivity[] = []

companyMainActivityRoutes.get('/', (_, response) => {

    const companyMainActivity: CompanyMainActivity = {
        code: 1,
        description: 'Main activity test'
    };

    companyMainActivities.push(companyMainActivity);

    return response.status(200).send(companyMainActivities);
})

export { companyMainActivityRoutes };