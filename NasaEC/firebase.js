import { initializeApp } from "firebase/app";
import {getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOyGXm2NvS4oujMpcq1fkVg0QCBP1_qV4",
    authDomain: "nasahunch-174c5.firebaseapp.com",
    projectId: "nasahunch-174c5",
    storageBucket: "nasahunch-174c5.appspot.com",  
    messagingSenderId: "373917231689",
    appId: "1:373917231689:web:c169187c0515b28cf56d98"
  };
  

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {db, ref, onValue};