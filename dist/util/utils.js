"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_helper_1 = require("./jwt-helper");
const logger_1 = __importDefault(require("./logger"));
const moment_1 = __importDefault(require("moment"));
function isEmptyOrNull(value) {
    return value === undefined || value === null || value === '';
}
exports.isEmptyOrNull = isEmptyOrNull;
function isEmptyOrNullParams(value) {
    return value === 'undefined' || value === undefined || value === null || value === '';
}
exports.isEmptyOrNullParams = isEmptyOrNullParams;
function getAuthorization(req) {
    // tslint:disable-next-line:max-line-length
    const headers = req.headers.authorization ? typeof req.headers.authorization === 'string' ? req.headers.authorization : req.headers.authorization[0] : null;
    if (headers === null) {
        return null;
    }
    if (!headers.includes('Bearer ')) {
        return null;
    }
    const headersParsed = headers.trim().split('Bearer ');
    if (headersParsed.length === 2) {
        return headersParsed[1];
    }
    else {
        return null;
    }
}
exports.getAuthorization = getAuthorization;
function generateText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateText = generateText;
function logDetails(errorLevel, errorDescription) {
    const now = moment_1.default(new Date().toISOString());
    const datetime = now.format('YYYY-MM-DD HH:mm:ss ZZ');
    logger_1.default.log(errorLevel, `[${datetime}] ${errorDescription}`);
}
exports.logDetails = logDetails;
function getDay() {
    const now = moment_1.default(new Date().toISOString());
    return +now.format('DD');
}
exports.getDay = getDay;
function getWeek() {
    const now = moment_1.default(new Date().toISOString());
    return now.week();
}
exports.getWeek = getWeek;
function getMonth() {
    const now = moment_1.default(new Date().toISOString());
    return +now.format('MM');
}
exports.getMonth = getMonth;
function getDate() {
    const now = moment_1.default(new Date().toISOString());
    const datetime = now.format('YYYY-MM-DD HH:mm:ss ZZ');
    return datetime;
}
exports.getDate = getDate;
function getAuthorizedUser(req, res, next) {
    const token = getAuthorization(req);
    if (!token) {
        return res.status(401).send('Unauthorized access');
    }
    return jwt_helper_1.decodeToken(token);
}
exports.getAuthorizedUser = getAuthorizedUser;
//# sourceMappingURL=utils.js.map