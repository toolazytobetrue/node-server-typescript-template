import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/secrets';
import { logDetails } from '../utils/utils';

function connectToMongoDb() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(async () => {
        console.log('Successfully connected to mongodb');
    }).catch((err: string) => {
        logDetails('error', 'MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit(1);
    });
}

export {
    connectToMongoDb
}