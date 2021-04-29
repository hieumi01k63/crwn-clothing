import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6GaXIT7o7BpE8aX7O7p9WGb953PAvODc",
  authDomain: "crwn-db-eb5df.firebaseapp.com",
  projectId: "crwn-db-eb5df",
  storageBucket: "crwn-db-eb5df.appspot.com",
  messagingSenderId: "615318497857",
  appId: "1:615318497857:web:b0aef6744f320941c134c0",
  measurementId: "G-0YPYQC3X8Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
