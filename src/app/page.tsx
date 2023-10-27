import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const initFirebase = () => {
  if (getApps().length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string)
      ),
    });
  }
};

export default function Home() {
  return <></>;
}
