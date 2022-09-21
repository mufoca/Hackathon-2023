import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,onValue,push,set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCd-ZXpym75WVSQp9_mTzlTmt2_4ptJtGs",
    authDomain: "hackathon-2022-81f7b.firebaseapp.com",
    projectId: "hackathon-2022-81f7b",
    storageBucket: "hackathon-2022-81f7b.appspot.com",
    messagingSenderId: "466349206375",
    appId: "1:466349206375:web:3fa656e4ebfe8c79181dc2",
    databaseURL: "https://hackathon-2022-81f7b-default-rtdb.firebaseio.com/"

};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let var_temp = document.getElementById('var-temp');
let var_soil = document.getElementById('var-soil-moisture');
let var_hum  = document.getElementById('var-humidity');

let select_crops = document.getElementById('select-crop');

function AddNewOption(nameOfCrop){
    let option = document.createElement('option');
    option.innerHTML = nameOfCrop;
    select_crops.appendChild(option);
}

function AddAllItemToSelection(crops){
    select_crops.innerHTML = "";

    crops.forEach(element => {
        AddNewOption(element.name);
        // console.log(element.name);
    })
}

function GetAllDataRealtime(){
    let dbref = ref(db,"crops");

    onValue(dbref, (snapshot) => {

        let crops = [];
        snapshot.forEach((childSnapshot) => {
            crops.push(childSnapshot.val());
            console.log(crops);
          // ...
        });
        AddAllItemToSelection(crops);
    })
}

window.onload = GetAllDataRealtime();

select_crops.onchange = function(){
    let selectedvalue = this.value;
    console.log(selectedvalue);
    const starCountRef = ref(db, 'crops/' + selectedvalue);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    printValue(data.temp,data.hum,data.soil);
});
}

function printValue(temp,hum,soil){
    var_temp.innerText = temp;
    var_hum.innerText = hum;
    var_soil.innerText = soil;
}