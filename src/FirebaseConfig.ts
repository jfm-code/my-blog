import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8fqJm3WAgec0owHmZvKAnZaKcle-0QhY",
  authDomain: "jfm-blog.firebaseapp.com",
  projectId: "jfm-blog",
  storageBucket: "jfm-blog.appspot.com",
  messagingSenderId: "771508106798",
  appId: "1:771508106798:web:abdc2e8532bf76fadcd1bf",
  measurementId: "G-L5QTG77S8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
