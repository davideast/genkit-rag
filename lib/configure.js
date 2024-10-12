"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@genkit-ai/core");
const googleai_1 = require("@genkit-ai/googleai");
const firebase_1 = require("@genkit-ai/firebase");
const dotprompt_1 = require("@genkit-ai/dotprompt");
(0, core_1.configureGenkit)({
    plugins: [
        (0, googleai_1.googleAI)(),
        (0, firebase_1.firebase)(),
        (0, dotprompt_1.dotprompt)(),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});
//# sourceMappingURL=configure.js.map