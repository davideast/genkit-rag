import * as z from 'zod';

export const PageDataSchema = z.object({
  name: z.string(),
  details: z.string(),
  description: z.string(),
})

export type PageData = z.infer<typeof PageDataSchema>

export const input = z.string().describe('Page Url')
export const output = PageDataSchema
