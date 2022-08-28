import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDdBk0vyoAqt3ramAq7hIGPjXNAgMnBTL8",
    authDomain: "snapchat-clone-1234.firebaseapp.com",
    projectId: "snapchat-clone-1234",
    storageBucket: "snapchat-clone-1234.appspot.com",
    messagingSenderId: "1092077064552",
    appId: "1:1092077064552:web:0d29718d9f3affbabc86dd",
    measurementId: "G-1DQM429JME"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  {storage,db};
export {auth,provider};
