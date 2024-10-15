import { defineFlow } from '@genkit-ai/flow';
import { input, output, Input } from './schema'
import { promptRef } from '@genkit-ai/dotprompt';

export default defineFlow({
  name: 'type',
  inputSchema: input,
  outputSchema: output,
}, async (input: Input) => {
  const ref = promptRef<typeof input>('type')
  return (await ref.generate({ input })).output()
})
