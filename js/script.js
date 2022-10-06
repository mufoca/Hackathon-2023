import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCd-ZXpym75WVSQp9_mTzlTmt2_4ptJtGs",
    authDomain: "hackathon-2022-81f7b.firebaseapp.com",
    databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com",
    projectId: "hackathon-2022-81f7b",
    storageBucket: "hackathon-2022-81f7b.appspot.com",
    messagingSenderId: "466349206375",
    appId: "1:466349206375:web:3fa656e4ebfe8c79181dc2",
    databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let btn = document.getElementById('start-stop');
let status = document.getElementById('motor-status');

btn.addEventListener('click',()=>{
    if(btn.innerHTML === "Force Start"){
        btn.innerHTML = "Force Stop";
        status.innerHTML = "ON";
        status.style = "color:#009933";
        const reference = ref(db, 'Motor Status/');
        update(reference, {
           motor_status:true
        });
        console.log("Your Motor is ON");
        sendNotification("Motor Status",`Motor is ON`,"","Motor Status");
    }
    else{
        btn.innerHTML = "Force Start";
        status.innerHTML = "OFF";
        status.style = "color: #ff0000";
        const reference = ref(db, 'Motor Status/');
        update(reference, {
           motor_status:false
        });
        console.log("Your Motor is OFF");
        sendNotification("Motor Status",`Motor is OFF`,"","Motor Status");
    }
});

setInterval(() => {
    if(status.innerText == 'ON')
    {
        const reference = ref(db, 'Motor Status/');
        update(reference, {
            motor_status:true
        });
    }
    else{
        const reference = ref(db, 'Motor Status/');
        update(reference, {
            motor_status:false
        });
    }
}, 1000);

let login = document.getElementById("login-btn");

login.addEventListener('click',function(e){

  location.replace('login.html');
});