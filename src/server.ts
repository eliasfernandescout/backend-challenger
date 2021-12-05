import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

import './database/mongoConnect';
import { router } from './routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use(router);

app.listen(5002, () => {
    console.log('-- SERVER STARTED ON PORT 5002');
});
