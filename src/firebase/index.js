import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaozmWq7WEzCcrPcgwBjjlp8hLJEws64s",
  authDomain: "vue3-todo-12726.firebaseapp.com",
  projectId: "vue3-todo-12726",
  storageBucket: "vue3-todo-12726.appspot.com",
  messagingSenderId: "345453505761",
  appId: "1:345453505761:web:920e60cb7f8528c660dba0",
  measurementId: "G-B7W3JVXC8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  db
}
