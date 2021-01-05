 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBV05iu0DzwEmIcZlncAifweAdqMlMjU0s",
    authDomain: "joe-bentley-firegram.firebaseapp.com",
    projectId: "joe-bentley-firegram",
    storageBucket: "joe-bentley-firegram.appspot.com",
    messagingSenderId: "671107552048",
    appId: "1:671107552048:web:1ea2daaa9fa51d7a572ef5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };