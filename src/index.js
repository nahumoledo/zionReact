import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn-09jkRojcE1lu65ypTnu8dRe2PYe1Zs",
  authDomain: "zion-ecommerce.firebaseapp.com",
  projectId: "zion-ecommerce",
  storageBucket: "zion-ecommerce.appspot.com",
  messagingSenderId: "679186559836",
  appId: "1:679186559836:web:5275632f2775b0f7a48799"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
