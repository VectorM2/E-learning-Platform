const firebaseConfig = {
  apiKey: "AIzaSyAzh0qapVg-vuD5kPGTSUwZp6n9ds2ksd4",
  authDomain: "e-students-764ac.firebaseapp.com",
  projectId: "e-students-764ac",
  storageBucket: "e-students-764ac.appspot.com",
  messagingSenderId: "458914599582",
  appId: "1:458914599582:web:e3ec37a1c12c97217d618f"
};

firebase.initilizeApp(firebaseConfig);

var fileText = document.equrySelector(".fileText");
var progress = document.querySelector(".progress");
var fileItem;
var fileName;
     function getFile(e){
      fileItem =e.target.file[0];
      fileName = fileItem.name;
      fileText.innerHTML = fileName;
}

function uploadDocument(){

  let storageRef = firebase.storage().ref("Documents/"+filename)
  let uploadTask = storageRef.put(fileItem);

  uploadTask.on("state_changed",(snapshot))=>{
              console.log(snapshot);
  },(error)=>{
    console.log("Error is ", error);
  },()=>

    uploadTask.snapshot.ref.getDownloadULR().then((url)=>(
      console.log("URL", url);
    )}
  
              
 
}

