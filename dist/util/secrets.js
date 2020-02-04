"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./logger"));
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
else {
    logger_1.default.error('.env required to run the app.');
    process.exit(1);
}
if (process.env.NODE_ENV !== 'production') {
    logger_1.default.debug('Logging initialized at debug level');
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
exports.MONGODB_URI = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI_LOCAL;
if (!exports.MONGODB_URI) {
    if (prod) {
        logger_1.default.error('No mongo connection string. Set MONGODB_URI environment variable.');
    }
    else {
        logger_1.default.error('No mongo connection string. Set MONGODB_URI_LOCAL environment variable.');
    }
}
//# sourceMappingURL=secrets.js.map