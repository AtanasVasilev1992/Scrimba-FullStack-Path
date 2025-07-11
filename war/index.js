const newDeckBtn = document.getElementById("new-deck");

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