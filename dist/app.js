"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const secrets_1 = require("./util/secrets");
const app = express_1.default();
const mongoUrl = secrets_1.MONGODB_URI ? secrets_1.MONGODB_URI : '';
mongoose_1.default.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
})
    .catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
});
app.set('port', process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.default = app;
//# sourceMappingURL=app.js.map