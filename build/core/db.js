"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const secrets_1 = require("../utils/secrets");
const utils_1 = require("../utils/utils");
function connectToMongoDb() {
    mongoose_1.default.set('useCreateIndex', true);
    mongoose_1.default.connect(secrets_1.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => __awaiter(this, void 0, void 0, function* () {
        console.log('Successfully connected to mongodb');
    })).catch((err) => {
        utils_1.logDetails('error', 'MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit(1);
    });
}
exports.connectToMongoDb = connectToMongoDb;
//# sourceMappingURL=db.js.map