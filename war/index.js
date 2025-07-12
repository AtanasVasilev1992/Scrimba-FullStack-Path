const newDeckBtn = document.getElementById("new-deck");
const drawBtn = document.getElementById("draw-cards");

let deckId = undefined;
newDeckBtn.addEventListener("click", handleClick);

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;

            console.log(deckId);
            console.log(data);
        })
}


drawBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => console.log(data))
})