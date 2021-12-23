// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
