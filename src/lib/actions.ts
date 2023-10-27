"use server";

import { credential } from "firebase-admin";
import { getApps, initializeApp } from "firebase-admin/app";

const foo = () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: credential.cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string)
      ),
    });
  }
};

export { foo };
