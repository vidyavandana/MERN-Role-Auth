import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAT1zg2ENhSiaCWJfJlRNaz10fMfxj-OrY",
  authDomain: "mern-role-auth.firebaseapp.com",
  projectId: "mern-role-auth",
  storageBucket: "mern-role-auth.appspot.com",
  messagingSenderId: "654517964280",
  appId: "1:654517964280:web:b3ddb59d4e86a85bc41a0d",
  measurementId: "G-KK4ZR3V8YF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
