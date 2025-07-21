const body = document.body;
const author = document.getElementById("author");
const time = document.getElementById("time");
const crypto = document.getElementById("crypto");
const cryptoTop = document.getElementById("crypto-top");
const weather = document.getElementById("weather");

function updateTime() {
    const date = new Date();
    let currentTime = date.toLocaleTimeString("bg-BG", { timeStyle: "medium" });
    time.textContent = currentTime;
};

setInterval(updateTime, 1000);

try {
    const res = await fetch(
        "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
    );
    const data = await res.json();
    body.style.backgroundImage = `url(${data.urls.regular})`;

    if (data.exif.make) {
        author.innerHTML += `
            <p>📸 ${data.exif.make}<p>
        `;
    };

    if (data.location.name) {
        author.innerHTML += `
            <p>🌍 ${data.location.name}<p>
        `;
    };

    author.innerHTML += `<p>By: ${data.user.name}<p>`;

} catch (err) {
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    author.textContent = `👤 Dodi Achmad`;
};

try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");

    if (!res.ok) {
        throw Error("Something went wrong");
    };

    const data = await res.json();

    cryptoTop.innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;

    crypto.innerHTML += `
            <p>🎯: € ${data.market_data.current_price.eur}</p>
            <p>👆: € ${data.market_data.high_24h.eur}</p>
            <p>👇: € ${data.market_data.low_24h.eur}</p>
        `;
} catch (err) {
    console.error(err);
}

navigator.geolocation.getCurrentPosition(async (position) => {
    try {
        const res = await fetch(
            `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
        );

        if (!res.ok) {
            throw Error("Weather data not available");
        }

        const data = await res.json();

        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weather.innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}ºC</p>
                <p class="weather-city">${data.name}</p>
            `;
    } catch (err) {
        console.error(err);
    }
});