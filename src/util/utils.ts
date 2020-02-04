import { NextFunction, Request, Response } from 'express';
import { verifyData, decodeToken } from './jwt-helper';
import logger from './logger';
import moment from 'moment';
import { round } from 'mathjs';

export function isEmptyOrNull(value?: string | number) {
    return value === undefined || value === null || value === '';
}

export function isEmptyOrNullParams(value: string) {
    return value === 'undefined' || value === undefined || value === null || value === '';
}

export function getAuthorization(req: Request): string | null {
    // tslint:disable-next-line:max-line-length
    const headers: string | null = req.headers.authorization ? typeof req.headers.authorization === 'string' ? req.headers.authorization : req.headers.authorization[0] : null;
    if (headers === null) {
        return null;
    }
    if (!headers.includes('Bearer ')) {
        return null;
    }
    const headersParsed = headers.trim().split('Bearer ');
    if (headersParsed.length === 2) {
        return headersParsed[1];
    } else {
        return null;
    }
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
export function getDay() {
    const now: moment.Moment = moment(new Date().toISOString());
    return +now.format('DD');
}
export function getWeek() {
    const now: moment.Moment = moment(new Date().toISOString());
    return now.week();
}
export function getMonth() {
    const now: moment.Moment = moment(new Date().toISOString());
    return +now.format('MM');
}

export function getDate() {
    const now: moment.Moment = moment(new Date().toISOString());
    const datetime = now.format('YYYY-MM-DD HH:mm:ss ZZ');
    return datetime;
}

export function getAuthorizedUser(req: Request, res: Response, next: NextFunction) {
    const token = getAuthorization(req);
    if (!token) {
        return res.status(401).send('Unauthorized access');
    }

    return decodeToken(token);
}