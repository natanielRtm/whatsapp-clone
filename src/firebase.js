import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHx6QruCOZUIyGwrtwKO9IcfGnYwT3vIQ",
  authDomain: "whatsapp-clone-ba92e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-ba92e.firebaseio.com",
  projectId: "whatsapp-clone-ba92e",
  storageBucket: "whatsapp-clone-ba92e.appspot.com",
  messagingSenderId: "664887137846",
  appId: "1:664887137846:web:f161ebda782322fdcc6a97",
  measurementId: "G-H6CTV31MEX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;