import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMyam01aFinTD_UO1pcDnYnTxx9AxTvFI",
  authDomain: "webapp-6d2a0.firebaseapp.com",
  projectId: "webapp-6d2a0",
  storageBucket: "webapp-6d2a0.appspot.com",
  messagingSenderId: "314942183186",
  appId: "1:314942183186:web:961f8075fec4c43b5d45cb",
  measurementId: "G-2NQ3DCQ7CJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();