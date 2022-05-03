// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4Rp2q6n76u9fN4VgVdyIt-UM1oztQgmc",
    authDomain: "my-grocery-warehouse-services.firebaseapp.com",
    projectId: "my-grocery-warehouse-services",
    storageBucket: "my-grocery-warehouse-services.appspot.com",
    messagingSenderId: "307311324724",
    appId: "1:307311324724:web:464256ccf9748b5ee3a461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;