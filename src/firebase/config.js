import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvKPTDVbeAiWUDYWdkN4_PzEJKlGq_Zmk",
    authDomain: "cooking-ninja-site-dcb18.firebaseapp.com",
    projectId: "cooking-ninja-site-dcb18",
    storageBucket: "cooking-ninja-site-dcb18.appspot.com",
    messagingSenderId: "1066788742682",
    appId: "1:1066788742682:web:0dd294cf6dbe834f5113a3"
  };

//init firebase 
firebase.initializeApp(firebaseConfig)

//init services 

const projectFirestore = firebase.firestore()

export { projectFirestore }