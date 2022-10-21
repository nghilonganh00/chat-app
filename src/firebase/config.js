// Import the functions you need from the SDKs you need
import { FirebaseApp } from "firebase/app";

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQZUZl5IKEirnC3PoW_px5GkurvEJptfg",
  authDomain: "chat-app-1d786.firebaseapp.com",
  projectId: "chat-app-1d786",
  storageBucket: "chat-app-1d786.appspot.com",
  messagingSenderId: "341911131553",
  appId: "1:341911131553:web:2270f39d0c73455220e7e0",
  measurementId: "G-3HYCLC31K4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firebase