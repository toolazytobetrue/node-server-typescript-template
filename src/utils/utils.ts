import logger from './logger';
import moment from 'moment';
export function isEmptyOrNull(value: string) {
    return value === 'undefined' || value === undefined || value === null || value === '';
}

export function generateText(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function logDetails(errorLevel: string, errorDescription: string) {
    const now: moment.Moment = moment(new Date().toISOString());
    const datetime = now.format('YYYY-MM-DD HH:mm:ss ZZ');
    logger.log(errorLevel, `[${datetime}] ${errorDescription}`);
}

export function generateUuid() {
    const uuidv1 = require('uuid/v1');
    return uuidv1();
}

export function deepClone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}

export const currencies = [
    'USD',
    'GBP',
    'EUR',
    'CAD',
    'CNY',
    'NZD'
]