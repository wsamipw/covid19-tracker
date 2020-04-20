import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCeu2isDVtED-F2ITGrohwmdDJRFbzm9Jo",
    authDomain: "covid19-nepal-tk.firebaseapp.com",
    databaseURL: "https://covid19-nepal-tk.firebaseio.com",
    projectId: "covid19-nepal-tk",
    storageBucket: "covid19-nepal-tk.appspot.com",
    messagingSenderId: "520873241763",
    appId: "1:520873241763:web:7bfee54e034a639e20a316",
    measurementId: "G-C7H32R8PPZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;