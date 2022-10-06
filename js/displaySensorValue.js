const selectSensor = document.getElementsByClassName("select_sensor");

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+30}&#8451;</option>`;
    selectSensor[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+40}</option>`;
    selectSensor[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 4; i > 0; i--) {
    let option = `<option value="sensor${i}">Sensor ${i}: ${i+800}</option>`;
    selectSensor[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
