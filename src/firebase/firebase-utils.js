import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZcuADC5uTQDT7D22xkdGd5_N-CLe7aM4",
    authDomain: "e-commerce-fashion.firebaseapp.com",
    databaseURL: "https://e-commerce-fashion.firebaseio.com",
    projectId: "e-commerce-fashion",
    storageBucket: "e-commerce-fashion.appspot.com",
    messagingSenderId: "384432620944",
    appId: "1:384432620944:web:ae0b32ec10a0f38d739f15",
    measurementId: "G-GE7V50ZS0J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;