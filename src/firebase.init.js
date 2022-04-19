// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsn2H0LiPJIlR_mZqXaJaGx0X0DeNY4pU",
    authDomain: "genius-car-service-dbb63.firebaseapp.com",
    projectId: "genius-car-service-dbb63",
    storageBucket: "genius-car-service-dbb63.appspot.com",
    messagingSenderId: "221287295993",
    appId: "1:221287295993:web:6551faa5325c51a3936b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;