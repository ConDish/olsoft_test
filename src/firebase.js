import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDqaXMUTSMHINIp7jdPLrvnLTdL_G1-c4g",
    authDomain: "olsoft.firebaseapp.com",
    databaseURL: "https://olsoft.firebaseio.com",
    projectId: "olsoft",
    storageBucket: "olsoft.appspot.com",
    messagingSenderId: "831673566866",
    appId: "1:831673566866:web:ffbd54983c197e73cbc84b",
    measurementId: "G-NCV24ELT3N"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db