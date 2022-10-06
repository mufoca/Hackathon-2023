import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getDatabase, ref, set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCd-ZXpym75WVSQp9_mTzlTmt2_4ptJtGs",
  authDomain: "hackathon-2022-81f7b.firebaseapp.com",
  databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com",
  projectId: "hackathon-2022-81f7b",
  storageBucket: "hackathon-2022-81f7b.appspot.com",
  messagingSenderId: "466349206375",
  appId: "1:466349206375:web:3fa656e4ebfe8c79181dc2",
  databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com/"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let sing_in = document.getElementById('login');

sing_in.addEventListener('click',function (e){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 

        const user = userCredential.user;
        console.log(user);
        alert('sign-in successfully');
        const reference = ref(db, 'users/' + user.uid);
        set(reference, {
          last_login: Date.now()
        });
        location.replace("admin_page.html");

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});