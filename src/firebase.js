import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9PAFc2MgJEhtXajc6j2eMVZBJ28C5euQ",
  authDomain: "challenge-36c88.firebaseapp.com",
  projectId: "challenge-36c88",
  storageBucket: "challenge-36c88.appspot.com",
  messagingSenderId: "745871952711",
  appId: "1:745871952711:web:c3a59530202580e3721a62",
  measurementId: "G-TEJ2VKSHSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };