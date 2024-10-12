import * as z from 'zod';

import { generate } from '@genkit-ai/ai';
import { gemini15Flash } from '@genkit-ai/googleai';
import { firestore } from './firebase'
import { startFlowsServer } from '@genkit-ai/flow';
import scrape from './flows/scrape'
import format from './flows/format'
import raceType from './flows/type'
import './configure'

export {
  scrape,
  format,
  raceType,
}

startFlowsServer();
