import * as z from 'zod';
import { RaceSchema } from '../type/schema'
export const input = z.string().describe('Page URL')
export const output = z.object({
  markdown: z.string(),
  race: RaceSchema
})

export type Input = z.infer<typeof input>
export type Output = z.infer<typeof output>
