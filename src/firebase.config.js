// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUlEQHPfk9whq6CAU4ksACvFk5tV9CodI",
  authDomain: "myclone-37a95.firebaseapp.com",
  projectId: "myclone-37a95",
  storageBucket: "myclone-37a95.appspot.com",
  messagingSenderId: "408540071967",
  appId: "1:408540071967:web:be2b6465cb239b0abead2a",
  measurementId: "G-8004RTQGFW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
