"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceType = exports.format = exports.scrape = void 0;
const flow_1 = require("@genkit-ai/flow");
const scrape_1 = __importDefault(require("./flows/scrape"));
exports.scrape = scrape_1.default;
const format_1 = __importDefault(require("./flows/format"));
exports.format = format_1.default;
const type_1 = __importDefault(require("./flows/type"));
exports.raceType = type_1.default;
require("./configure");
(0, flow_1.startFlowsServer)();
//# sourceMappingURL=index.js.map