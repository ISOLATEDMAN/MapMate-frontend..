// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqlUxkBU9DoT4Zr3FRzCNjb61WoHL0G6s",
  authDomain: "mapmate-837b8.firebaseapp.com",
  projectId: "mapmate-837b8",
  storageBucket: "mapmate-837b8.firebasestorage.app",
  messagingSenderId: "245512852400",
  appId: "1:245512852400:web:39e47ce95c9df4a88d7c75",
  measurementId: "G-6NQGK46202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };