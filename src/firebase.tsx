import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyB6sqFc8b3d95mI5hfAtcYK_fT06Tq4KuM",
    authDomain: "shakfethefairycount.firebaseapp.com",
    projectId: "shakfethefairycount",
    storageBucket: "shakfethefairycount.appspot.com",
    messagingSenderId: "282196968756",
    appId: "1:282196968756:web:78243f721337cf2278d161",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
