import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger';

if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
    logger.error('.env required to run the app.');
    process.exit(1);
}

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const MONGODB_URI: string | undefined = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI_LOCAL;
if (!MONGODB_URI) {
    if (prod) {
        logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
    } else {
        logger.error('No mongo connection string. Set MONGODB_URI_LOCAL environment variable.');
    }
}