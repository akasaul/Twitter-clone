import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9_uSO08URgEubTVKi6n8cZE-BJxs1GXc",
  authDomain: "authentication-firebase-d1bee.firebaseapp.com",
  projectId: "authentication-firebase-d1bee",
  storageBucket: "authentication-firebase-d1bee.appspot.com",
  messagingSenderId: "618046336272",
  appId: "1:618046336272:web:fbb035a5ff9d738ef50995",
  measurementId: "G-SW7YC74W82"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);