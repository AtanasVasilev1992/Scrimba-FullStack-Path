const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

let metersToFeets = 0
let feetsToMeters = 0

let litersToGallons = 0
let gallonsToLitters = 0

let kilogramsToPounds = 0
let poundsToKilograms = 0

convertBtn.addEventListener("click", function() {
    let convertNumValue = Number(document.getElementById("convert-num").value);
    metersToFeets = convertNumValue * 3.281
    feetsToMeters = convertNumValue / 3.281

    litersToGallons = convertNumValue * 0.264
    gallonsToLitters = convertNumValue / 0.264
    
    kilogramsToPounds = convertNumValue * 2.204
    poundsToKilograms = convertNumValue / 2.204

    lengthEl.textContent = `${convertNumValue} meters = ${metersToFeets.toFixed(3)} feet 
    | ${convertNumValue} feet = ${feetsToMeters.toFixed(3)} meters`

    volumeEl.textContent = `${convertNumValue} liters = ${litersToGallons.toFixed(3)} gallons 
    | ${convertNumValue} gallons = ${gallonsToLitters.toFixed(3)} liters`

    massEl.textContent = `${convertNumValue} kilos = ${kilogramsToPounds.toFixed(3)} pounds 
    | ${convertNumValue} pounds = ${poundsToKilograms.toFixed(3)} kilos`
})