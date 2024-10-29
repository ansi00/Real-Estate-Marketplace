// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6eb04.firebaseapp.com",
  projectId: "real-estate-6eb04",
  storageBucket: "real-estate-6eb04.appspot.com",
  messagingSenderId: "774488532727",
  appId: "1:774488532727:web:bc64309445a281e6e595f2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);