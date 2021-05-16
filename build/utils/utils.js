"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencies = exports.deepClone = exports.generateUuid = exports.logDetails = exports.generateText = exports.isEmptyOrNull = void 0;
const logger_1 = __importDefault(require("./logger"));
const moment_1 = __importDefault(require("moment"));
function isEmptyOrNull(value) {
    return value === 'undefined' || value === undefined || value === null || value === '';
}
exports.isEmptyOrNull = isEmptyOrNull;
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
function generateUuid() {
    const uuidv1 = require('uuid/v1');
    return uuidv1();
}
exports.generateUuid = generateUuid;
function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}
exports.deepClone = deepClone;
exports.currencies = [
    'USD',
    'GBP',
    'EUR',
    'CAD',
    'CNY',
    'NZD'
];
//# sourceMappingURL=utils.js.map