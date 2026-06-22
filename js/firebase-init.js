// firebase-init.js

// Load Firebase (v8 syntax for browser)
document.write('<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>');
document.write('<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>');

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAoX5CLGpen-VMH7tpFohaXBAihryKZx50",
  authDomain: "infin8radio.firebaseapp.com",
  databaseURL: "https://infin8radio-default-rtdb.firebaseio.com/",
  projectId: "infin8radio",
  storageBucket: "infin8radio.firebasestorage.app",
  messagingSenderId: "1034600571948",
  appId: "1:1034600571948:web:e0d1a0b0d11e5f66c91d89"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
