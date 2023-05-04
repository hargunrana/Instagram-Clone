// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0ZQCWqx4KGRAe1BIK2mxjPUBN_x75VyI",
    authDomain: "instagram-clone-73.firebaseapp.com",
    projectId: "instagram-clone-73",
    storageBucket: "instagram-clone-73.appspot.com",
    messagingSenderId: "373155600537",
    appId: "1:373155600537:web:49ad30fa1b043912754008",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };
