// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDWhiKWblqX1cWaZcwjlL7MWsizpvAqL0",
  authDomain: "tourist-service-server.firebaseapp.com",
  projectId: "tourist-service-server",
  storageBucket: "tourist-service-server.appspot.com",
  messagingSenderId: "306494757873",
  appId: "1:306494757873:web:add62163bc36387e06c250",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
