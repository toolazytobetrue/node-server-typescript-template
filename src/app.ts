import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';

const app = express();
const mongoUrl: string = MONGODB_URI ? MONGODB_URI : '';

mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {

    })
    .catch((err: string) => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    });

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
