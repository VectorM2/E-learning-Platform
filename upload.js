import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getStorage , ref , uploadBytes ,listAll, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

// Your web app's Firebase configuration

const firebaseConfig = {

 apiKey: "AIzaSyAzh0qapVg-vuD5kPGTSUwZp6n9ds2ksd4",

 authDomain: "e-students-764ac.firebaseapp.com",

 projectId: "e-students-764ac",

 storageBucket: "e-students-764ac.appspot.com",

 messagingSenderId: "458914599582",
 appId: "1:458914599582:web:e3ec37a1c12c97217d618f"
};



const app = initializeApp(firebaseConfig);

// Create a root reference
const storage = getStorage(app);

const storageRef = ref(storage, 'documents');

const fileInput = document.getElementById("document")

const upload = document.getElementById("upload")
upload.addEventListener("click", function(event){
event.preventDefault()

const selectedFile = fileInput.files[0];
if (selectedFile) {
  const fileRef = ref(storageRef, selectedFile.name);

  uploadBytes(fileRef, selectedFile).then((snapshot) => {
    console.log('Uploaded a file!', snapshot);
    alert("File Uploaded , Thanks for bieng an awesome person😁")
    const form = document.getElementById("form").reset();
  }).catch((error) => {
    console.error('Error uploading file:', error);
   alert("error try again!!")
  });
} else {
  console.log('No file selected.');
  alert("select a file")
}


})


