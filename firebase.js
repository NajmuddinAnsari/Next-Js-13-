// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhwPfPvDC5WtAN-47jRMZ6KyuFtqurXP8",
    authDomain: "lets-build-ac543.firebaseapp.com",
    projectId: "lets-build-ac543",
    storageBucket: "lets-build-ac543.appspot.com",
    messagingSenderId: "79261907079",
    appId: "1:79261907079:web:278dcb1045bc3164bae022"
};

// Initialize Firebase
// const app = !firebaseConfig.app.lenght ? initializeApp(firebaseConfig) : firebase.app();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db}