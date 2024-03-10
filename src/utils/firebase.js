// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJZvxhYMSsNkmw37ldw7TR_ev4vBy-6mw",
  authDomain: "netflixgpt-fea6a.firebaseapp.com",
  projectId: "netflixgpt-fea6a",
  storageBucket: "netflixgpt-fea6a.appspot.com",
  messagingSenderId: "723259416266",
  appId: "1:723259416266:web:6d48908490f18dc6d29e33",
  measurementId: "G-XNYERL09VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
