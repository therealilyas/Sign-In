// let i;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // Initialize Firebase
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyBcJ85ybWGVyykl072LqGCEBLVXGxbnsHk",
//     authDomain: "login-3a701.firebaseapp.com",
//     databaseURL: "https://login-3a701-default-rtdb.firebaseio.com",
//     projectId: "login-3a701",
//     storageBucket: "login-3a701.appspot.com",
//     messagingSenderId: "1093910792805",
//     appId: "1:1093910792805:web:8394be547662971526548c",
//     measurementId: "G-V0HQRJCH61"
// });
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

// // db.settings({ timestampInSnapshots: true })

// export default {
//     firebaseApp,
//     auth,
//     db
// }


// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     //get user info
//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;

//     auth.createUserWithEmailAndPassword(email, password).then(cred => {
//         console.log(cred)
//     })
// });