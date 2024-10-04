// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADWT_687sVT4yXmtC0fUuy_nfDoGs4ZWU",
  authDomain: "todoapp-vuejs-7db08.firebaseapp.com",
  projectId: "todoapp-vuejs-7db08",
  storageBucket: "todoapp-vuejs-7db08.appspot.com",
  messagingSenderId: "1085985303286",
  appId: "1:1085985303286:web:0ca13e100b7d3b3acfdad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { db, auth };