// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDumuvVZegk2HSI2wLiGfCd4G5Fb7PNTNg",
  authDomain: "car-services-77165.firebaseapp.com",
  projectId: "car-services-77165",
  storageBucket: "car-services-77165.appspot.com",
  messagingSenderId: "749680264563",
  appId: "1:749680264563:web:d69138d510f11f7104f106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;