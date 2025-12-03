// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7B3sV-09tvWQGCQTVhmjXpdGqc8JjQKg",
  authDomain: "jsi40-d42b6.firebaseapp.com",
  projectId: "jsi40-d42b6",
  storageBucket: "jsi40-d42b6.firebasestorage.app",
  messagingSenderId: "1088752303047",
  appId: "1:1088752303047:web:db382f20953ef72de4f7e2",
  measurementId: "G-077NDB5EFG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
