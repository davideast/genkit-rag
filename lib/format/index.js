"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flow_1 = require("@genkit-ai/flow");
const schema_1 = require("./schema");
const dotprompt_1 = require("@genkit-ai/dotprompt");
const scrape_1 = __importDefault(require("../scrape"));
exports.default = (0, flow_1.defineFlow)({
    name: 'format',
    inputSchema: schema_1.input,
    outputSchema: schema_1.output,
}, async (url) => {
    const pageData = await (0, flow_1.runFlow)(scrape_1.default, url);
    const ref = (0, dotprompt_1.promptRef)('format');
    const prompt = await ref.generate({
        input: pageData
    });
    const v = prompt.output();
    console.log(v);
    return v;
});
//# sourceMappingURL=index.js.map