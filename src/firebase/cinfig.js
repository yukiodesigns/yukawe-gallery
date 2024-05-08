// Import the functions you need from the SDKs you need
import 'firebase/storage'
import 'firebase/firestore'
import * as firebase from 'firebase/app'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf4W30HeYiEm2Y1ccPBXFzuXrPP0EjjH0",
  authDomain: "yukawe-30e65.firebaseapp.com",
  projectId: "yukawe-30e65",
  storageBucket: "yukawe-30e65.appspot.com",
  messagingSenderId: "256654091632",
  appId: "1:256654091632:web:6e6f16ad4919203742dbb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage()
const projectFireStore = firebase.firestore()

export { app, projectFireStore, projectStorage}