"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const port = 3005;
console.log(chalk_1.default.yellow('process.env.PORT', process.env.PORT));
// Create a new express application instance
exports.app = express_1.default();
const server = exports.app.listen(port, () => {
    console.log(chalk_1.default.yellow(`Example app listening on port ${port}!`));
});
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
