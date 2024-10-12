"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flow_1 = require("@genkit-ai/flow");
const schema_1 = require("./schema");
const dotprompt_1 = require("@genkit-ai/dotprompt");
exports.default = (0, flow_1.defineFlow)({
    name: 'type',
    inputSchema: schema_1.input,
    outputSchema: schema_1.output,
}, async (input) => {
    const ref = (0, dotprompt_1.promptRef)('type');
    const prompt = await ref.generate({ input });
    const v = prompt.output();
    console.log(v);
    return v;
});
//# sourceMappingURL=index.js.map