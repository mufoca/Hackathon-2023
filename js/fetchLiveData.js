
let temp_live_data = document.getElementById("temp_live_data");
let hum_live_data = document.getElementById("hum_live_data");
let soil_live_data = document.getElementById("soil_live_data");
let ttt3 = document.getElementById("temp_live_data1");

function field1()
{
  setInterval(function(){
    fetch('https://api.thingspeak.com/channels/1833491/fields/field1/last.txt?api_key=7D92ULX6128DMIYA')
    .then((response) => response.json())
    .then((data) => temp_live_data.innerHTML = ' '+data+' C');
  },1000);
}

function field2()
{
  setInterval(function(){
    fetch('https://api.thingspeak.com/channels/1833491/fields/field2/last.txt?api_key=7D92ULX6128DMIYA')
    .then((response) => response.json())
    .then((data) => hum_live_data.innerHTML = ' '+data+'%');
  },1000);

}

function field3()
{
  setInterval(function(){
    fetch('https://api.thingspeak.com/channels/1833491/fields/field3/last.txt?api_key=7D92ULX6128DMIYA')
    .then((response) => response.json())
    .then((data) => soil_live_data.innerHTML = ' '+data);
  },1000);

}

document.addEventListener('DOMContentLoaded',function(){
  field1();
  field2();
  field3();
});
