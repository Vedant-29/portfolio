// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtH09HA7fLdgZmcrhwckNUGZr7FzIiUJc",
  authDomain: "unifest-web.firebaseapp.com",
  projectId: "unifest-web",
  storageBucket: "unifest-web.appspot.com",
  messagingSenderId: "440480326213",
  appId: "1:440480326213:web:8348c035462150bc38b92c",
  measurementId: "G-T91M3SFFYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export const db = getFirestore(app);
export { auth };