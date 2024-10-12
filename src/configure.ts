import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import { firebase } from "@genkit-ai/firebase";
import { dotprompt } from '@genkit-ai/dotprompt';

configureGenkit({
  plugins: [
    googleAI(),
    firebase(),
    dotprompt(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
