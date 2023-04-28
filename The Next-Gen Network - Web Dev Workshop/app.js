
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getFirestore, collection, addDoc,onSnapshot, getDocs, query  } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBShPeGvlKrkby1bsAgT12vjenDEy5Ty7k",
    authDomain: "login-7b160.firebaseapp.com",
    projectId: "login-7b160",
    storageBucket: "login-7b160.appspot.com",
    messagingSenderId: "301737389748",
    appId: "1:301737389748:web:8baf56937ddb63fcf0b1e1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', async() => {
  let email = document.getElementById("email");
	let number = document.getElementById("number");
	let age = document.getElementById("age");
	let name = document.getElementById("name");

	const docRef = await addDoc(collection(db, "contact"), {
    name: name.value,
    email: email.value,
    age: age.value,
    number: number.value
  });


  name.value = "";
  email.value = "";
  number.value = "";
  age.value = "";
})


const q = query(collection(db, "contact"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().name);
});


const auth = getAuth();
// createUserWithEmailAndPassword(auth, "chinmaykulthe897@gmail.com", "12345678")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// const auth = getAuth();
signInWithEmailAndPassword(auth, "chinmaykulthe897@gmail.com", "12345678")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });