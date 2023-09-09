// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaNAy1MyiBPXNmSGPDjwapL0KG4UMtaUo",
  authDomain: "vite-contact-app-99146.firebaseapp.com",
  projectId: "vite-contact-app-99146",
  storageBucket: "vite-contact-app-99146.appspot.com",
  messagingSenderId: "78303589328",
  appId: "1:78303589328:web:d5b81e927d1db13f64bfd5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);