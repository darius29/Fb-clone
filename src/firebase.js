import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC11phcEg61khoyJaCjUA8jc9Wqd7YvjOM",
    authDomain: "facebook-clone-1c3b3.firebaseapp.com",
    projectId: "facebook-clone-1c3b3",
    storageBucket: "facebook-clone-1c3b3.appspot.com",
    messagingSenderId: "67776305222",
    appId: "1:67776305222:web:bbdc56de9e6b8451025247",
    measurementId: "G-3FS9766KQN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;