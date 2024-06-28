import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQUMC-TmV3cE3rJur581psg1bAOrrEfPk",
  authDomain: "nc-app-7665c.firebaseapp.com",
  projectId: "nc-app-7665c",
  storageBucket: "nc-app-7665c.appspot.com",
  messagingSenderId: "477201180631",
  appId: "1:477201180631:web:3677d554c0e2a8ece0cd92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
