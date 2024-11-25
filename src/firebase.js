// src/firebase.js

// Import necessary Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqVq_t5Z1QoLq0i43ceqDnXG2CaorvY74",
  authDomain: "proyecto00-ecd12.firebaseapp.com",
  projectId: "proyecto00-ecd12",
  storageBucket: "proyecto00-ecd12.firebasestorage.app",
  messagingSenderId: "62169049344",
  appId: "1:62169049344:web:6f17aedc8d9082d4dd6be5",
  measurementId: "G-XGF52D0J4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };
