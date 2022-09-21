
function startStop1()
{
    let btn = document.getElementById('start-stop');
    let status = document.getElementById('motor-status');

    if(btn.innerHTML === "Force Start"){
        btn.innerHTML = "Force Stop";
        status.innerHTML = "ON";
        status.style = "color:#FF1A01";
        btn.style = "background-color:#FF1A01";
    }
    else{
        btn.innerHTML = "Force Start";
        status.innerHTML = "OFF";
        status.style = "color: #ff0000";
        btn.style = "background-color:#4EE82A";

    }
}
function startStop2()
{
    let btn = document.getElementById('start-stop');
    let status = document.getElementById('motor-status');

    if(btn.innerHTML === "Force Start"){
        btn.innerHTML = "Force Stop";
        status.innerHTML = "ON";
        status.style = "color:#FF1A01";
        btn.style = "background-color:#FF1A01";
    }
    else{
        btn.innerHTML = "Force Start";
        status.innerHTML = "OFF";
        status.style = "color: #ff0000";
        btn.style = "background-color:#3FB7F3";

    }
}
// function switchMode(){
//   let btn = document.getElementById('switch-mode');
//   let range1 = document.getElementById("range1");
//   let range2 = document.getElementById("range2");
//   let range3 = document.getElementById("range3");
//   let cp = document.getElementById('cp');
//   if(btn.innerHTML === "Switch To Manual Mode")
//   {
//     btn.innerHTML = "Switch To Automatic Mode";
//     document.getElementById('current-preset').innerHTML = "Recommended Preset";
//     range1.disabled = true;
//     range2.disabled = true;
//     range3.disabled = true;
//     range1.style.display = 'none';
//     range2.style.display = 'none';
//     range3.style.display = 'none';
//     cp.style.paddingTop = '30px';
//   }
//   else{
//     btn.innerHTML = "Switch To Manual Mode";
//     document.getElementById('current-preset').innerHTML = "Current Preset";
//     range1.disabled = false;
//     range2.disabled = false;
//     range3.disabled = false;
//     range1.style.display = 'block';
//     range2.style.display = 'block';
//     range3.style.display = 'block';
//     cp.style.paddingTop = '0';

//   }
// }

let login = document.getElementById("login-btn");

login.addEventListener('click',function(e){

  location.replace('login.html');
});