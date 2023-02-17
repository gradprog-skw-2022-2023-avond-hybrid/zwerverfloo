// Import the functions you need from the SDKs you need
import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBi6LuyXXbbAF3T7rNpMbeUd47tXwbBInw",
    authDomain: "zwerver-191b7.firebaseapp.com",
    projectId: "zwerver-191b7",
    storageBucket: "zwerver-191b7.appspot.com",
    messagingSenderId: "775154586724",
    appId: "1:775154586724:web:9942a3a2dc5ed00b197b71"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        // this.db = app.database(); Later add database
    }

    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () =>
        this.auth.signOut();

    doPasswordReset = email =>
        this.auth.sendPasswordResetEmail(email);
}

export default Firebase;