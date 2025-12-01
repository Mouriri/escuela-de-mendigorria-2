import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "API_KEY_MOCK",
    authDomain: "mendigorria-school.firebaseapp.com",
    projectId: "mendigorria-school",
    storageBucket: "mendigorria-school.appspot.com",
    messagingSenderId: "SENDER_ID_MOCK",
    appId: "APP_ID_MOCK"
};

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
