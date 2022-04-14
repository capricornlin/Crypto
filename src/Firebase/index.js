// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-GQmMeQ3fgAmz_5wJBStbyqTGSKe03PM",
  authDomain: "cryptos-2e94d.firebaseapp.com",
  projectId: "cryptos-2e94d",
  storageBucket: "cryptos-2e94d.appspot.com",
  messagingSenderId: "757506857024",
  appId: "1:757506857024:web:04402e1c4c37e7c5bd67a5",
  measurementId: "G-TVSL89L5JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
