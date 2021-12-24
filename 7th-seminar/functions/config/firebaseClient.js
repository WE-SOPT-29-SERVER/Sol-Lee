// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyAJuXo4ZV2VDhwfVIdb4seUOBW0GCYSncE',
  authDomain: 'wesopt29-b36aa.firebaseapp.com',
  projectId: 'wesopt29-b36aa',
  storageBucket: 'wesopt29-b36aa.appspot.com',
  messagingSenderId: '156877177411',
  appId: '1:156877177411:web:80e2c3f552b8f8505e8af6',
  measurementId: 'G-J96RXRE8QT',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
