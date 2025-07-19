const body = document.body;
const author = document.getElementById("author");
const time = document.getElementById("time");
const crypto = document.getElementById("crypto");
const cryptoTop = document.getElementById("crypto-top");


function updateTime() {
    const date = new Date()
    let currentTime = date.toLocaleTimeString("bg-BG", {timeStyle: "medium"})
    time.textContent = currentTime
};

setInterval(updateTime, 1000);

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        body.style.backgroundImage = `url(${data.urls.regular})`
		author.textContent = `By: ${data.user.name}`
        author.innerHTML += `
        <p>${data.exif.make}<p>
        <p>${data.location.name}<p>
        `
    })
    .catch(err => {
        body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		author.textContent = `By: Dodi Achmad`
    });


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
         cryptoTop.innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `

        crypto.innerHTML += `
            <p>🎯: € ${data.market_data.current_price.eur}</p>
            <p>👆: € ${data.market_data.high_24h.eur}</p>
            <p>👇: € ${data.market_data.low_24h.eur}</p>
        `
    })
    .catch(err => console.error(err));

