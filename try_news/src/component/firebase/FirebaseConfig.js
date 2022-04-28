import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBlq1917OC2PZziK7onWrFJo5jAMZj205w",
    authDomain: "newss-44e83.firebaseapp.com",
    projectId: "newss-44e83",
    storageBucket: "newss-44e83.appspot.com",
    messagingSenderId: "706024603532",
    appId: "1:706024603532:web:36b0b39617df74227d20a9",
    measurementId: "G-RYKDFVBNN7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth =firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider};
  
   