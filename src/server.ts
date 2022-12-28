import express from 'express';
import { companyMainActivityRoutes } from './routes/company-main-activities.routes';
import { partnerRoutes } from './routes/partners.routes';

const app = express();

app.use(express.json());

app.use('/partners', partnerRoutes);

app.listen(3333, () => console.log("Server is running on port: 3333"));
