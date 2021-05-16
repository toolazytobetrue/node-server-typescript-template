"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_xml_bodyparser_1 = __importDefault(require("express-xml-bodyparser"));
const controllers_1 = require("./core/controllers");
const db_1 = require("./core/db");
const app = express_1.default();
app.use(express_xml_bodyparser_1.default());
app.use(cors_1.default());
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(() => {
    db_1.connectToMongoDb();
    controllers_1.defineControllers(app);
})();
exports.default = app;
//# sourceMappingURL=app.js.map