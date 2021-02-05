import express from 'express';
import routes from './routes';
import "reflect-metadata";
import './database/Connection'
import { getRepository } from 'typeorm'
import User from './models/User'

const app = express();
app.use(express.json());
app.use(routes);


console.log("App ready to use");
app.listen(3333);