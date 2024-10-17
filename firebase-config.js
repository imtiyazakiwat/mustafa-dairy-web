// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWi7dEKpiU9E9jEg_K7KleJ5zjm6A4PU0",
  authDomain: "mustafa-dairy-8093d.firebaseapp.com",
  projectId: "mustafa-dairy-8093d",
  storageBucket: "mustafa-dairy-8093d.appspot.com",
  messagingSenderId: "456232515923",
  appId: "1:456232515923:web:f48ca3f22757f3907109a6",
  measurementId: "G-3FMSBQ1ZMD"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();