// authSolution.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// ... your Firebase config
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let isAuthenticating = true;
let user = null;

onAuthStateChanged(auth, (currentUser) => {
  isAuthenticating = false;
  user = currentUser;
  // Update UI based on user state
});

// ... in your component
if(isAuthenticating){
  // Show loading indicator
} else if(user){
  //User is logged in
} else {
  // User is logged out
}
