import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSwdLb2U39QYwBJxhHk9362mmfWA4sEho",
    authDomain: "escuela-mendigorria.firebaseapp.com",
    projectId: "escuela-mendigorria",
    storageBucket: "escuela-mendigorria.firebasestorage.app",
    messagingSenderId: "903158192678",
    appId: "1:903158192678:web:91fae51bf1ebc14e87a4e7",
    measurementId: "G-7JP600M7QG"
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
