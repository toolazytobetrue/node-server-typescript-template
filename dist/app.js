"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index = __importStar(require("./controllers/index"));
const secrets_1 = require("./util/secrets");
const utils_1 = require("./util/utils");
const express_xml_bodyparser_1 = __importDefault(require("express-xml-bodyparser"));
const redisOptions = {
    password: 'hassan123'
};
// export const client = redis.createClient(redisOptions);
const app = express_1.default();
app.use(express_xml_bodyparser_1.default());
app.use(cors_1.default());
const mongoUrl = secrets_1.MONGODB_URI ? secrets_1.MONGODB_URI : '';
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => __awaiter(this, void 0, void 0, function* () {
    console.log('Successfully connected to mongodb');
}))
    .catch((err) => {
    utils_1.logDetails('error', 'MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit(1);
});
app.set('port', process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', index.index);
exports.default = app;
//# sourceMappingURL=app.js.map