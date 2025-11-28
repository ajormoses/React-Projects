import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

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
export function writeUserData(id: string) {
  const savedData = JSON.parse(localStorage.getItem("profileData") || "{}");
  const db = getDatabase();

  // If id is not provided, generate a new one
  const profileId = id || savedData.id;

  // Save the id back in localStorage for future edits
  localStorage.setItem(
    "profileData",
    JSON.stringify({ ...savedData, id: profileId })
  );

  const reference = ref(db, "profiles/" + profileId);
  return set(reference, { ...savedData, id: profileId }).then(() => profileId); // return the id
}
