import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyArp3KRImp-OWSP_7QWw3VbS9Pt4HD5l1w",
  authDomain: "db-zyxbot.firebaseapp.com",
  projectId: "db-zyxbot",
  storageBucket: "db-zyxbot.appspot.com",
  messagingSenderId: "88740223225",
  appId: "1:88740223225:web:bab209d2c154957a0f2a28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
