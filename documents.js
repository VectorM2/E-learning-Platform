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

//fetch
const documentList = document.getElementById("documentList");

// Function to fetch and display uploaded documents
async function fetchAndDisplayDocuments() {
  try {
    const documents = await listAll(storageRef);
    
    documents.items.forEach(async (itemRef) => {
      const downloadURL = await getDownloadURL(itemRef);
      
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      
      const link = document.createElement("a");
      link.href = downloadURL;
      link.target = "_blank";
      link.innerText = itemRef.name;
      
      const downloadButton = document.createElement("a");
      downloadButton.href = downloadURL;
      downloadButton.target = "_blank";
      downloadButton.className = "btn btn-primary";
      downloadButton.innerText = "Download";
      
      listItem.appendChild(link);
      listItem.appendChild(downloadButton);
      
      documentList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

// Call the function to fetch and display documents
fetchAndDisplayDocuments();