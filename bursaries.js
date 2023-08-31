import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Your web app's Firebase configuration
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

const bursaryForm = document.getElementById("bursaryForm");
const submitBtn = document.getElementById("submitBtn");
const bursaryList = document.getElementById("bursaryList");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value;

  if (name && amount && description) {
    const newBursaryRef = push(ref(db, "bursaries"));
    set(newBursaryRef, { name, amount, description });

    bursaryForm.reset();
  }
});

// Listen for changes in the database
ref(db, "bursaries").on("child_added", (snapshot) => {
  const bursary = snapshot.val();
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${bursary.name}</strong> - Amount: ${bursary.amount}, Description: ${bursary.description}`;
  bursaryList.appendChild(listItem);
});
