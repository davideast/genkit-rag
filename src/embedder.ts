import { embed } from "@genkit-ai/ai/embedder";
import { Document } from "@genkit-ai/ai/retriever";
import { textEmbeddingGecko001 } from "@genkit-ai/googleai";
import { firestore } from './firebase'
import { FieldValue } from 'firebase-admin/firestore'

const eventCol = firestore.collection('events');

interface EmbedderParams {
  text: string;
  metadata?: Record<string, any>;
  embedderFunc?: typeof textEmbeddingGecko001;
}

export async function embedder({ text, metadata = {}, embedderFunc = textEmbeddingGecko001 }: EmbedderParams) {
  return embed({
    embedder: embedderFunc, 
    content: Document.fromText(text, metadata),
  });
}

async function indexToFirestore(data: string[]) {
  for (const text of data) {
    const embedding = await embedder({ text })
    await eventCol.add({
      embedding: FieldValue.vector(embedding),
      description: text,
    });
  }
}
