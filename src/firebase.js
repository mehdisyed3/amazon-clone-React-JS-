import firebase from 'firebase'



// got this from firebase < yeh 3.55 per hai >
const firebaseConfig = { 
  apiKey: "AIzaSyBoDTyfxKRfUGe-KZZZFNLV4BOOALH7ZKM",
  authDomain: "clone-4b9f3.firebaseapp.com",
  databaseURL: "https://clone-4b9f3.firebaseio.com",
  projectId: "clone-4b9f3",
  storageBucket: "clone-4b9f3.appspot.com",
  messagingSenderId: "978525138769",
  appId: "1:978525138769:web:f605520bbbe5e9cbfbad70"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore() //initialiased database < firestore is realtime database in firebase
const auth = firebase.auth()

export {db,auth}