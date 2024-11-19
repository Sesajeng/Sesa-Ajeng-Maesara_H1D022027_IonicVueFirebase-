// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK2BT6MuaQtWbaPTMOL0TxB9BNGhHCStE",
  authDomain: "vue-firebase-13b84.firebaseapp.com",
  projectId: "vue-firebase-13b84",
  storageBucket: "vue-firebase-13b84.firebasestorage.app",
  messagingSenderId: "652875474589",
  appId: "1:652875474589:web:da4a1ac69543ac7d56d674"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
