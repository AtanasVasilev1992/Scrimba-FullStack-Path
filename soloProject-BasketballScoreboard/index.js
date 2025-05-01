let homeP = document.getElementById("home-p");
let guestP = document.getElementById("guest-p");

function homePlusOne() {
    let result = Number(homeP.textContent) + 1;
    homeP.textContent = result;
};

function homePlusTwo() {
    let result = Number(homeP.textContent) + 2;
    homeP.textContent = result;
};

function homePlusThree() {
    let result = Number(homeP.textContent) + 3;
    homeP.textContent = result;
};

function guestPlusOne() {
    let result = Number(guestP.textContent) + 1;
    guestP.textContent = result;
};

function guestPlusTwo() {
    let result = Number(guestP.textContent) + 2;
    guestP.textContent = result;
};

function guestPlusThree() {
    let result = Number(guestP.textContent) + 3;
    guestP.textContent = result;
};

function newGame() {
    homeP.textContent = 0;
    guestP.textContent = 0;
};