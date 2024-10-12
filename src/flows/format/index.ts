import { defineFlow, runFlow } from '@genkit-ai/flow'
import { input, output, Input } from './schema'
import { promptRef } from '@genkit-ai/dotprompt'
import scrape from '../scrape'
import raceType from '../type'

export default defineFlow({
  name: 'format',
  inputSchema: input,
  outputSchema: output,
}, async (url: Input) => {
  const input = await runFlow(scrape, url)
  const ref = promptRef<typeof input>('format')
  const prompt = await ref.generate({ input })
  const markdown = prompt.output()
  const race = await runFlow(raceType, markdown)
  return { markdown, race };
})
