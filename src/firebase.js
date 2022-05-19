import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBhW3KOvMmkEIk3FOIHcchYgPRvOsV2Nt8",
  authDomain: "clone-234bc.firebaseapp.com",
  projectId: "clone-234bc",
  storageBucket: "clone-234bc.appspot.com",
  messagingSenderId: "242704361594",
  appId: "1:242704361594:web:8eb8900ef4905d92aeb3c3",
  measurementId: "G-0VGQS82G8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }