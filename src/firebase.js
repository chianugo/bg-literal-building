// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0k3EwoGICm2PPWITFcmA1eaAiUG2KpGU",
  authDomain: "bg-literal.firebaseapp.com",
  projectId: "bg-literal",
  storageBucket: "bg-literal.appspot.com",
  messagingSenderId: "111724185395",
  appId: "1:111724185395:web:0db8322f8a896a1d7ba046",
  measurementId: "G-3DV40SZMC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

// export default app;
