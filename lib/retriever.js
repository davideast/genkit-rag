"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("@genkit-ai/firebase");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const googleai_1 = require("@genkit-ai/googleai");
const app = (0, app_1.initializeApp)();
const firestore = (0, firestore_1.getFirestore)(app);
const yourRetrieverRef = (0, firebase_1.defineFirestoreRetriever)({
    name: "yourRetriever",
    firestore: (0, firestore_1.getFirestore)(app),
    collection: "yourCollection",
    contentField: "yourDataChunks",
    vectorField: "embedding",
    embedder: googleai_1.textEmbeddingGecko001,
    distanceMeasure: "COSINE",
});
// const docs = await retrieve({
//   retriever: yourRetrieverRef,
//   query: "look for something",
//   options: {limit: 5},
// });
//# sourceMappingURL=retriever.js.map