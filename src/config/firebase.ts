import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXu53O673cOneUD-lfTO2xMtwoVEoVI6Y",
  authDomain: "auth-5868b.firebaseapp.com",
  projectId: "auth-5868b",
  storageBucket: "auth-5868b.firebasestorage.app",
  messagingSenderId: "512659648733",
  appId: "1:512659648733:web:2a645ef736746860626b34",
  measurementId: "G-E9584DKCT0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
