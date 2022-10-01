
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBt3HfUXDiml8kTbvpvYYIm3886T6zhP54",
    authDomain: "user-authentication-c6686.firebaseapp.com",
    databaseURL: "https://user-authentication-c6686-default-rtdb.firebaseio.com",
    projectId: "user-authentication-c6686",
    storageBucket: "user-authentication-c6686.appspot.com",
    messagingSenderId: "217875099834",
    appId: "1:217875099834:web:50fdc4b39f1c142f33d283"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
// submit.addEventListener('click', (e) => {

//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             set(ref(database, 'users/' + user.uid), {
//                 username: username,
//                 email: email
//             })
//             alert("User Created");
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//             // ..
//         });
// });
signin.addEventListener('click', (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            })

            alert("logged in")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);

        });
});

const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

logout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sign Out");

    }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
})