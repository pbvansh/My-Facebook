
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyDWSByrTsQUu7kONgWA5SJUsznJgks5IYA",
  authDomain: "my-facebook-165dc.firebaseapp.com",
  projectId: "my-facebook-165dc",
  storageBucket: "my-facebook-165dc.appspot.com",
  messagingSenderId: "967903091413",
  appId: "1:967903091413:web:c7a634885bfd5c243a205c"
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export {firestore,storage}