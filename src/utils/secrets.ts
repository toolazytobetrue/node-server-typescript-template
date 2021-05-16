import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger';

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
} else {
    logger.error('.env required to run the app.');
    process.exit(1);
}

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
export const MONGODB_URI = process.env.MONGODB_URI!!;