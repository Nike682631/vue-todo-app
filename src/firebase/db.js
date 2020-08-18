import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbnrvR4F6LwCFPAT78nbG7wpOFkurv23c",
  authDomain: "vue-firebase-todo-14f08.firebaseapp.com",
  databaseURL: "https://vue-firebase-todo-14f08.firebaseio.com",
  projectId: "vue-firebase-todo-14f08",
  storageBucket: "vue-firebase-todo-14f08.appspot.com",
  messagingSenderId: "400279133285",
  appId: "1:400279133285:web:293b14c11af091b3167a8c",
  measurementId: "G-73BX68LZL2",
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
firebase.analytics();
