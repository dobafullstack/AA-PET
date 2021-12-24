import firebase from 'firebase/compat/app'
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCrHniDUSnayEPne0IP1CYufL9RcjFMlDI",
    authDomain: "aapet-5fe5e.firebaseapp.com",
    projectId: "aapet-5fe5e",
    storageBucket: "aapet-5fe5e.appspot.com",
    messagingSenderId: "617107003055",
    appId: "1:617107003055:web:5bb2609ad7932399ce665a",
    measurementId: "G-GNP7KPPPFM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const storage = firebase.storage();
