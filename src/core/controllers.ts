
import * as index from '../controllers/index';
import { Express } from 'express';

function defineControllers(app: Express) {
    app.get('/', index.index);
}

export {
    defineControllers
};