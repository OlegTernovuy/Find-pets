// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHZaTaoky49EAH1E7NQ597C69SzzsIog",
  authDomain: "find-pets-project.firebaseapp.com",
  projectId: "find-pets-project",
  storageBucket: "find-pets-project.appspot.com",
  messagingSenderId: "569494104837",
  appId: "1:569494104837:web:cdfbfe204abb2de194e56c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
