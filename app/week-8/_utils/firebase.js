import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFPeM5yLvgzoNHEgB_XOt2W2etU4lHOw",
  authDomain: "shoppinglist-af2da.firebaseapp.com",
  projectId: "shoppinglist-af2da",
  storageBucket: "shoppinglist-af2da.appspot.com",
  messagingSenderId: "639538349193",
  appId: "1:639538349193:web:6ba33b13f3aff2d9657258",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
