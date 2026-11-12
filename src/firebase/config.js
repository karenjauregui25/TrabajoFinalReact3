// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5dCUJcGyI_LfdK8yLW0ZwB-6heVsgoHE",
  authDomain: "react-26242.firebaseapp.com",
  projectId: "react-26242",
  storageBucket: "react-26242.firebasestorage.app",
  messagingSenderId: "4040849952",
  appId: "1:4040849952:web:36b98e805640986d591a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

const auth =getAuth( app);

export {db, auth};
