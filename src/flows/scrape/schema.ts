import * as z from 'zod';

export const PageData = z.object({
  name: z.string(),
  details: z.string(),
  description: z.string(),
})

export const input = z.string().describe('Page Url')
export const output = PageData
