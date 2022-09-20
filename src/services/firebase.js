// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUdoqVJKQxyd1769lf9nUMGlVGpA0WBsc",
  authDomain: "alva-react.firebaseapp.com",
  projectId: "alva-react",
  storageBucket: "alva-react.appspot.com",
  messagingSenderId: "375170555681",
  appId: "1:375170555681:web:2bf14099ee5404448fe860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);
export default firestoreDB;

