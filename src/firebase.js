import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZh3d6c-nSM6wk4xZtIV168hOgIca6jg0",
  authDomain: "fantasy-cricket-c8906.firebaseapp.com",
  projectId: "fantasy-cricket-c8906",
  storageBucket: "fantasy-cricket-c8906.appspot.com",
  messagingSenderId: "494292005214",
  appId: "1:494292005214:web:2e06ce56022633d10e9fcf",
  measurementId: "G-9C6QPEMNPB"
};

initializeApp(firebaseConfig)
const db = getFirestore() 


export {db};