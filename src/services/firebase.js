// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5XptP49w2_qgZxygBR7Sk9ttJsUm_55U",
    authDomain: "business-358ad.firebaseapp.com",
    projectId: "business-358ad",
    storageBucket: "business-358ad.firebasestorage.app",
    messagingSenderId: "279940432647",
    appId: "1:279940432647:web:acfc0aeb1826608de13ba2",
    measurementId: "G-HHQVQ7NWHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);