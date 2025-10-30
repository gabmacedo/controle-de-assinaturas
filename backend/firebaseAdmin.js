import admin from "firebase-admin";
import { readFileSync } from "fs";

const serviceAccount = JSON
  .parse
  // readFileSync("./serviceAccountKey.json", "utf-8")
  ();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://controle-de-assinaturas-22622.firebaseio.com",
});

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
