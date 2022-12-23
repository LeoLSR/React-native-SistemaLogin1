import firebase from "firebase/compat";
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyArTpqRHngeC1rvCurqjkHCGDIT0A3-KNk",
    authDomain: "meuapp-8a840.firebaseapp.com",
    databaseURL: "https://meuapp-8a840-default-rtdb.firebaseio.com",
    projectId: "meuapp-8a840",
    storageBucket: "meuapp-8a840.appspot.com",
    messagingSenderId: "248863874917",
    appId: "1:248863874917:web:0151b34c4b64f2301f4b8c",
    measurementId: "G-5VD3KKB2KD"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase