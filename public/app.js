// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEm6dnpThXzgVIUBg_phBPZtyb1l9y9hM",
  authDomain: "first-project-8b0b2.firebaseapp.com",
  projectId: "first-project-8b0b2",
  storageBucket: "first-project-8b0b2.appspot.com",
  messagingSenderId: "955240141201",
  appId: "1:955240141201:web:976a37b4542930a5300a30",
  measurementId: "G-GG8XMFCT2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(firebase);