const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", 
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", 
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", 
    ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn");
const p1El = document.getElementById("p1");
const p2El = document.getElementById("p2");

let passwordLenght = 15;


generateBtn.addEventListener("click", function(){
    p1El.textContent = generateRandomPassword()

    p2El.textContent = generateRandomPassword()
})

function generateRandomPassword() {
    let password = ""
    for (let i = 0; i < passwordLenght; i++) {
        password += characters[getRandomChar()]
    }

    return password;
}

function getRandomChar() {
    return Math.floor( Math.random() * characters.length ) + 1;
}