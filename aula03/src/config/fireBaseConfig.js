import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const missingConfigKeys = Object.entries(firebaseConfig)
.filter(([, value]) => !value)
.map(([key]) => key);

if (missingConfigKeys.length) {
throw new Error(
`Firebase configuration ausente. Verifique as variáveis: ${missingConfigKeys.join(
", "
)}`
);
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };