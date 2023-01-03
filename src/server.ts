import express from 'express';
import dotenv from 'dotenv';

import { companyMainActivityRoutes } from './routes/company-main-activities.routes';
import { partnerRoutes } from './routes/partners.routes';

dotenv.config();

const app = express();
const serverPort = process.env.SERVER_PORT;

app.use(express.json());

app.use('/partners', partnerRoutes);
app.use('/company-main-activities', companyMainActivityRoutes);

app.listen(serverPort, () => console.log(`Server is running on port: ${serverPort}`));
