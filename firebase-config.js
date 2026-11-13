// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmj2cWdyqU8NRGFAGYclQeIuC1Pfgw-g",
  authDomain: "missaocumprida-85df0.firebaseapp.com",
  projectId: "missaocumprida-85df0",
  storageBucket: "missaocumprida-85df0.firebasestorage.app",
  messagingSenderId: "402746297689",
  appId: "1:402746297689:web:0668706a98301522ee1048",
  measurementId: "G-KBREZNNR8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
