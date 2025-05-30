import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK3jRKtR2hIm68NNTnOJsiavqzznPjTVU",
  authDomain: "portfolio-f4c5f.firebaseapp.com",
  projectId: "portfolio-f4c5f",
  storageBucket: "portfolio-f4c5f.firebasestorage.app",
  messagingSenderId: "591232008686",
  appId: "1:591232008686:web:557a3ae1876cb6f69f4eff",
  measurementId: "G-6L2QNEMFN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);