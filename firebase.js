import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCgu9VYx1XGORSzKc-fOxjsnhz3hXWjsiY",
  authDomain: "week5-symptomchecker.firebaseapp.com",
  projectId: "week5-symptomchecker",
  storageBucket: "week5-symptomchecker.firebasestorage.app",
  messagingSenderId: "608795295872",
  appId: "1:608795295872:web:d9e52daa8b36356cb3e665",
  measurementId: "G-STJSDX4LZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore(app);

export {app, db};
