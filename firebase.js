// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWSByrTsQUu7kONgWA5SJUsznJgks5IYA",
  authDomain: "my-facebook-165dc.firebaseapp.com",
  projectId: "my-facebook-165dc",
  storageBucket: "my-facebook-165dc.appspot.com",
  messagingSenderId: "967903091413",
  appId: "1:967903091413:web:c7a634885bfd5c243a205c"
};

// Initialize Firebase
const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { bd,storage };
