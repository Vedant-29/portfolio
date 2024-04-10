// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVwkPN_CmI9ETSDhKfO3Hbww_V7p7B-4E",
  authDomain: "react-firebase-auth-92903.firebaseapp.com",
  projectId: "react-firebase-auth-92903",
  storageBucket: "react-firebase-auth-92903.appspot.com",
  messagingSenderId: "827818092199",
  appId: "1:827818092199:web:0786f71ae5e3cf158edd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);