import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCggeTINx3f5c10rgSYKwv9Uy7rjmrTAtU",
  authDomain: "davutc-38ef9.firebaseapp.com",
  projectId: "davutc-38ef9",
  storageBucket: "davutc-38ef9.appspot.com",
  messagingSenderId: "571189795795",
  appId: "1:571189795795:web:bc7cb9bbe01a32d6de6d26"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }