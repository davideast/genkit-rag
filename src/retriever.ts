import {defineFirestoreRetriever} from "@genkit-ai/firebase";
import {retrieve} from "@genkit-ai/ai/retriever";

import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import { textEmbeddingGecko001 } from "@genkit-ai/googleai";

const app = initializeApp();
const firestore = getFirestore(app);

const yourRetrieverRef = defineFirestoreRetriever({
  name: "yourRetriever",
  firestore: getFirestore(app),
  collection: "yourCollection",
  contentField: "yourDataChunks",
  vectorField: "embedding",
  embedder: textEmbeddingGecko001,
  distanceMeasure: "COSINE",
});

// const docs = await retrieve({
//   retriever: yourRetrieverRef,
//   query: "look for something",
//   options: {limit: 5},
// });
