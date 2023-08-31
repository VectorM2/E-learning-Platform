import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyAzh0qapVg-vuD5kPGTSUwZp6n9ds2ksd4",
  authDomain: "e-students-764ac.firebaseapp.com",
  databaseURL: "https://e-students-764ac-default-rtdb.firebaseio.com",
  projectId: "e-students-764ac",
  storageBucket: "e-students-764ac.appspot.com",
  messagingSenderId: "458914599582",
  appId: "1:458914599582:web:e3ec37a1c12c97217d618f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const bursaryList = document.getElementById("bursaryList");

// Function to fetch and display uploaded bursaries
function fetchAndDisplayBursaries() {
  onValue(ref(db, "bursaries"), (snapshot) => {
    bursaryList.innerHTML = ""; // Clear previous content

    const bursaries = snapshot.val();
    for (const bursaryId in bursaries) {
      const bursary = bursaries[bursaryId];

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${bursary.title}</strong><br>
        Description: ${bursary.description}<br>
        Apply Link: <a href="${bursary.applyLink}" target="_blank">Apply Now</a><br>
      `;
      bursaryList.appendChild(listItem);
    }
  });
}

// Call the function to fetch and display bursaries
fetchAndDisplayBursaries();