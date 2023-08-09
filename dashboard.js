import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged, updatePassword ,updateProfile } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, push, get, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";


const firebaseConfig = {

 apiKey: "AIzaSyAzh0qapVg-vuD5kPGTSUwZp6n9ds2ksd4",

 authDomain: "e-students-764ac.firebaseapp.com",

 projectId: "e-students-764ac",

 storageBucket: "e-students-764ac.appspot.com",

 messagingSenderId: "458914599582",

 appId: "1:458914599582:web:e3ec37a1c12c97217d618f"

};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

const user = auth.currentUser;

// Function to update the user profile
function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;

  // Update the profile section with user data
  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

// Add the onAuthStateChanged listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, call the updateUserProfile function
    updateUserProfile(user);

    const uid = user.uid;
    return uid;

  } else {
    // User is not signed in, redirect to the registration page
    alert("Create Account & login");
    window.location.href = "/register.html";
  }
});



