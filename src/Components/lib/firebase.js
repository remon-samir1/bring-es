import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "kirvomart.firebaseapp.com",
  projectId: "kirvomart",
  storageBucket: "kirvomart.firebasestorage.app",
  messagingSenderId: "1052375870613",
  appId: "1:1052375870613:web:567fcf7ef8caa4bd3eff9c",
};

const app = initializeApp(firebaseConfig);
