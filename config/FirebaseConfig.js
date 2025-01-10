// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "geniuscandely.firebaseapp.com",
  projectId: "geniuscandely",
  storageBucket: "geniuscandely.appspot.com",
  messagingSenderId: "99053108294",
  appId: "1:99053108294:web:c4834a03196e33048c1e47",
  measurementId: "G-84MF96YY59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
