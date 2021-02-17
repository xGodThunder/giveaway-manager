import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhvqahoKGL10t8aBRzbvPkwgNEG7bI7Dk",
  authDomain: "giveaway-68775.firebaseapp.com",
  projectId: "giveaway-68775",
  storageBucket: "giveaway-68775.appspot.com",
  messagingSenderId: "617347690809",
  appId: "1:617347690809:web:aab9a068f06982d90eb8e8",
  measurementId: "G-BL369GVK9E"
};
firebase.initializeApp(firebaseConfig);
export default firebase;