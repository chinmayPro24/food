 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
 import { getFirestore, addDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBAFYKIbN8ofi95fntA_78al3HrsMS-RM4",
   authDomain: "search1-9baa6.firebaseapp.com",
   projectId: "search1-9baa6",
   storageBucket: "search1-9baa6.appspot.com",
   messagingSenderId: "180324936602",
   appId: "1:180324936602:web:ce49b4d4f42f72aeed6823"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);


//  await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });

//   const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
  
  const citiesRef = collection(db, "cities");

// Create a query against the collection.
const q = query(citiesRef, where("state", "==", "CA"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});