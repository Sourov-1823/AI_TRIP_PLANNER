// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKeW9bzY-9x8LtpQ3c6oLPwtQYispNfQQ",
  authDomain: "aitripplanner-9bd2f.firebaseapp.com",
  projectId: "aitripplanner-9bd2f",
  storageBucket: "aitripplanner-9bd2f.firebasestorage.app",
  messagingSenderId: "668947713963",
  appId: "1:668947713963:web:d35cdad594631b3add8cee",
  measurementId: "G-T45BL25CDM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);