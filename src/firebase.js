// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5DOlMXP9IedzosXcFls3kvbvdKyQGjGk",
  authDomain: "project-901413547666359240.firebaseapp.com",
  projectId: "project-901413547666359240",
  storageBucket: "project-901413547666359240.firebasestorage.app",
  messagingSenderId: "321646066089",
  appId: "1:321646066089:web:9f565ce9ca38d5516c6cb8",
  measurementId: "G-8SQYEJ2MHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
