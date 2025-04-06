// Import the required Firebase modules
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyDo8rQce-cYTVROX_b8iGZj1hayofQxJM0",
  authDomain: "booktracker-87332.firebaseapp.com",
  projectId: "booktracker-87332",
  storageBucket: "booktracker-87332.firebasestorage.app",
  messagingSenderId: "709454152210",
  appId: "1:709454152210:web:635674e37d4782ad4d0ecb",
  measurementId: "G-YZG91HG84N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for the application
module.exports = db;