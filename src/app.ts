import cors from 'cors';
import express from 'express';
import xmlparser from 'express-xml-bodyparser';
import { defineControllers } from './core/controllers';
import { connectToMongoDb } from './core/db';
const app = express();

app.use(xmlparser());
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(() => {
    connectToMongoDb();
    defineControllers(app);
})();

export default app;
