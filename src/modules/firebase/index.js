// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
/* require("firebase/firestore"); */

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1LKqdnYzY2NJP2hcLlm4MsRcTfyo8Ggk",
    authDomain: "ejercicio1-291ab.firebaseapp.com",
    projectId: "ejercicio1-291ab",
    storageBucket: "ejercicio1-291ab.appspot.com",
    messagingSenderId: "710571685997",
    appId: "1:710571685997:web:856c0cceb08eb980702764"
};


//
let firebFunctions = {};
firebFunctions.signUp = (email, password) => {
    return new Promise((resolved) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                resolved(user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                resolved(errorCode, errorMessage)
                // ..
            });

    })
}

module.exports = firebFunctions;


/* // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 */