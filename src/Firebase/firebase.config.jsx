// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0782l_Xv-Qs3mSkoUQbLSycIHknuwqR0",
  authDomain: "fawazmall.firebaseapp.com",
  projectId: "fawazmall",
  storageBucket: "fawazmall.appspot.com",
  messagingSenderId: "985282488379",
  appId: "1:985282488379:web:573bae0d5f2a9ea2ba941e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app