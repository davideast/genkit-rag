"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = exports.firestore = exports.credentials = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const node_fs_1 = require("node:fs");
const app = (0, app_1.initializeApp)();
exports.firebaseApp = app;
const firestore = (0, firestore_1.getFirestore)(app);
exports.firestore = firestore;
const creds = (0, node_fs_1.readFileSync)(process.env.CREDS_FILE, "utf-8");
let credentials;
if (creds) {
    exports.credentials = credentials = JSON.parse(creds);
    firestore.settings({ credentials });
}
//# sourceMappingURL=firebase.js.map