import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDN1kHvDIi_Nsnp6yaiJWZBcyENzhkgswY",
  authDomain: "kirvomart.firebaseapp.com",
  projectId: "kirvomart",
  storageBucket: "kirvomart.firebasestorage.app",
  messagingSenderId: "1052375870613",
  appId: "1:1052375870613:web:567fcf7ef8caa4bd3eff9c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
