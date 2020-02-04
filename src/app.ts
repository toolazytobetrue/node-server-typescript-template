import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as index from './controllers/index';
import { MONGODB_URI } from './util/secrets';
import { logDetails } from './util/utils';
import mysql from 'mysql';
import xmlparser from 'express-xml-bodyparser';
import redis from 'redis';
const redisOptions = {
    password: 'hassan123'
};
// export const client = redis.createClient(redisOptions);

const app = express();

app.use(xmlparser());

app.use(cors());
const mongoUrl: string = MONGODB_URI ? MONGODB_URI : '';

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(async () => {
        console.log('Successfully connected to mongodb');
    })
    .catch((err: string) => {
        logDetails('error', 'MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit(1);
    });

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index.index);
export default app;
