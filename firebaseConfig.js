// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbUJ6YSDr1pp43bn1Dtm7G-_fstQCHqjY",
  authDomain: "share-8a1d0.firebaseapp.com",
  databaseURL:
    "https://share-8a1d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "share-8a1d0",
  storageBucket: "share-8a1d0.appspot.com",
  messagingSenderId: "184493391147",
  appId: "1:184493391147:web:b8c9f6c0dbc8dd00e5596e",
  measurementId: "G-TZ12QE7NBJ",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default FIREBASE_APP;
export const FIREBASE_AUTH = getAuth(FIREBASE_AUTH);
// const analytics = getAnalytics(FIREBASE_APP);
