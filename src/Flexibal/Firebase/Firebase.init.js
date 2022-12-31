// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMbPiYSQwcJNPEC5HzDNU0xhNjPgUPp0o",
  authDomain: "flexibal-2edd1.firebaseapp.com",
  projectId: "flexibal-2edd1",
  storageBucket: "flexibal-2edd1.appspot.com",
  messagingSenderId: "618932551833",
  appId: "1:618932551833:web:13dea8274fb487f1a4f808",
  measurementId: "G-G8GCJHPYCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app