import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "node:fs"

const app = initializeApp();
const firestore = getFirestore(app);
const creds = readFileSync(process.env.CREDS_FILE as string, "utf-8")
let credentials: any;

if (creds) {
  credentials = JSON.parse(creds);
  firestore.settings({ credentials });
}

export {
  credentials,
  firestore,
  app as firebaseApp,
};
