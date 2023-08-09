import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {

 apiKey: "AIzaSyAzh0qapVg-vuD5kPGTSUwZp6n9ds2ksd4",

 authDomain: "e-students-764ac.firebaseapp.com",

 projectId: "e-students-764ac",

 storageBucket: "e-students-764ac.appspot.com",

 messagingSenderId: "458914599582",

 appId: "1:458914599582:web:e3ec37a1c12c97217d618f"

};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const register = document.getElementById("register");
register.addEventListener("click", function (event) {
 event.preventDefault()

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   alert("Account Created , Login")
   window.location.href = "login.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)

  });

})




const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "dashboard.html";




  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
alert(errorMessage)


  });



 }
)