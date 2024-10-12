import { defineFlow } from '@genkit-ai/flow';
import { input, output } from './schema'
import * as cheerio from 'cheerio';

export default defineFlow({
  name: 'scrape',
  inputSchema: input,
  outputSchema: output
}, async (url: string) => {
  const $ = await cheerio.fromURL(url)
  return { 
    name: $('h1.entry-title').text()!,
    details: $('#sidebar').html()!, 
    description: $('.tribe-events-single-event-description').html()!
  }
})
