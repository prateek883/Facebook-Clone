import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD44EVr9kyKK_eNSLownEFK7DicmFGyb6I",
    authDomain: "facebook-clone-ebf7c.firebaseapp.com",
    databaseURL: "https://facebook-clone-ebf7c.firebaseio.com",
    projectId: "facebook-clone-ebf7c",
    storageBucket: "facebook-clone-ebf7c.appspot.com",
    messagingSenderId: "548724544551",
    appId: "1:548724544551:web:1973405d56a4d593a6ea02",
    measurementId: "G-S98Y0LS2L2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;