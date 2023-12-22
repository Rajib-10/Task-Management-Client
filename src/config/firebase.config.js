// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH0uP6XAPpNpJlnn9Edrk7tY4a_sxILmI",
  authDomain: "task-manager-a145b.firebaseapp.com",
  projectId: "task-manager-a145b",
  storageBucket: "task-manager-a145b.appspot.com",
  messagingSenderId: "869183409117",
  appId: "1:869183409117:web:ba135e8e99febd5b7e8434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth