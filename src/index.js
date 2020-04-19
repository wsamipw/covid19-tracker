import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  FirebaseAppProvider,
} from "reactfire";

import "bootstrap/dist/css/bootstrap.min.css";
const firebaseConfig = {
  apiKey: "AIzaSyDegMqWRyXcQ9ZLoNk4k1SBM3lyJj4XC8s",
  authDomain: "covid19-tk.firebaseapp.com",
  databaseURL: "https://covid19-tk.firebaseio.com",
  projectId: "covid19-tk",
  storageBucket: "covid19-tk.appspot.com",
  messagingSenderId: "532427713757",
  appId: "1:532427713757:web:c95aa9bb65592458c63f34",
  measurementId: "G-W3C2XVKKCV",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
