// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGm3EFjWrIHf6QWVlZ84nEIHGxwSYMxMg",
  authDomain: "myexpo-8ff01.firebaseapp.com",
  projectId: "myexpo-8ff01",
  storageBucket: "myexpo-8ff01.appspot.com",
  messagingSenderId: "127683255158",
  appId: "1:127683255158:web:79db1ec47fbcd1b89d7857",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };
