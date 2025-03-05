import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4VnTVrAfxUjDFV9wkSLDSQWmFRvdTyw",
  authDomain: "fir-petroler.firebaseapp.com",
  projectId: "fir-petroler",
  storageBucket: "fir-petroler.appspot.com",
  messagingSenderId: "31652025914",
  appId: "1:31652025914:web:751862b8a628f888640703",
  measurementId: "G-7HCEKZ8M8V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };