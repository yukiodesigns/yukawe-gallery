// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
  import "firebase/compat/storage";
  import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf4W30HeYiEm2Y1ccPBXFzuXrPP0EjjH0",
  authDomain: "yukawe-30e65.firebaseapp.com",
  projectId: "yukawe-30e65",
  storageBucket: "yukawe-30e65.appspot.com",
  messagingSenderId: "256654091632",
  appId: "1:256654091632:web:6e6f16ad4919203742dbb5"
};

// const app = initializeApp(firebaseConfig);
// const projectFireStore = getFirestore(app);
// const projectStorage = getStorage(app);
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFireStore, projectStorage ,timestamp};
