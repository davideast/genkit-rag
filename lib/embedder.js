"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedder = embedder;
const embedder_1 = require("@genkit-ai/ai/embedder");
const retriever_1 = require("@genkit-ai/ai/retriever");
const googleai_1 = require("@genkit-ai/googleai");
const firebase_1 = require("./firebase");
const firestore_1 = require("firebase-admin/firestore");
const eventCol = firebase_1.firestore.collection('events');
async function embedder({ text, metadata = {}, embedderFunc = googleai_1.textEmbeddingGecko001 }) {
    return (0, embedder_1.embed)({
        embedder: embedderFunc,
        content: retriever_1.Document.fromText(text, metadata),
    });
}
async function indexToFirestore(data) {
    for (const text of data) {
        const embedding = await embedder({ text });
        await eventCol.add({
            embedding: firestore_1.FieldValue.vector(embedding),
            description: text,
        });
    }
}
//# sourceMappingURL=embedder.js.map