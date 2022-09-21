let temp_value = document.getElementById('var-temp');
let humidity_value = document.getElementById('var-humidity');
let soil_Moisture_value = document.getElementById('var-soil-moisture');

function temp_rs(value) {
  temp_value.innerHTML = value;
}
function humidity_rs(value) {
  humidity_value.innerHTML = value;
}
function soil_Moisture_rs(value) {
  soil_Moisture_value.innerHTML = value;
}

function temp_threshold_value() {
  let xhr = new XMLHttpRequest();
  let url = "https://api.thingspeak.com/update?api_key=B1Y0WN410XJ1VOG8&field1=" + temp_value.innerText;

  xhr.open("POST", url);
  xhr.send();
  console.log(temp_value.innerText);

}

function soil_Moisture_threshold_value() {
  let xhr = new XMLHttpRequest();
  let url = "https://api.thingspeak.com/update?api_key=B1Y0WN410XJ1VOG8&field2=" + soil_Moisture_value.innerText;

  xhr.open("POST", url);
  xhr.send();
  console.log(soil_Moisture_value.innerText);
 
}
function humidity_threshold_value() {
  let xhr = new XMLHttpRequest();
  let url = "https://api.thingspeak.com/update?api_key=B1Y0WN410XJ1VOG8&field3=" + humidity_value.innerText;

  xhr.open("POST", url);
  xhr.send();
  console.log(humidity_value.innerText);
}

