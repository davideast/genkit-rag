import { defineFlow, runFlow } from '@genkit-ai/flow';
import { input, output, Input, Output, Race } from './schema'
import { promptRef } from '@genkit-ai/dotprompt';
import format from '../format'

export default defineFlow({
  name: 'type',
  inputSchema: input,
  outputSchema: output,
}, async (input: Input) => {

  const ref = promptRef<string>('type');
  const prompt = await ref.generate({ input })

  const v = prompt.output()
  console.log(v)

  return v;
})
