import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTL43ezZicq2ZdFE1sGj5fG1hly_EGiDk",
  authDomain: "react-discord-clone-johannamag.firebaseapp.com",
  databaseURL: "https://react-discord-clone-johannamag.firebaseio.com",
  projectId: "react-discord-clone-johannamag",
  storageBucket: "react-discord-clone-johannamag.appspot.com",
  messagingSenderId: "1011077591427",
  appId: "1:1011077591427:web:e699f214253d54fddf86b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
