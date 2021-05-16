"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.prod = exports.ENVIRONMENT = void 0;
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
exports.prod = exports.ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
exports.MONGODB_URI = process.env.MONGODB_URI;
//# sourceMappingURL=secrets.js.map