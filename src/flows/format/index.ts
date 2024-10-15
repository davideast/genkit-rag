import { defineFlow, runFlow } from '@genkit-ai/flow'
import { input, output, Input } from './schema'
import prompt from './prompt'
import scrape from '../scrape'
import raceType from '../type'

export default defineFlow({
  name: 'format',
  inputSchema: input,
  outputSchema: output,
}, async (url: Input) => {
  const pageData = await runFlow(scrape, url);
  const markdown = (await prompt.generate({ input: pageData })).text()
  const race = await runFlow(raceType, { markdown })
  return { markdown, race };
})
