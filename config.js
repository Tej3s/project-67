import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD-7ThMCaBEtAR3sJskv7DaPwz7a7CTDH4",
    authDomain: "project-67-d9a2b.firebaseapp.com",
    projectId: "project-67-d9a2b",
    storageBucket: "project-67-d9a2b.appspot.com",
    messagingSenderId: "918192802122",
    appId: "1:918192802122:web:65794ade2aa797fe8c59b3",
    measurementId: "G-R4RDWRZLYY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();