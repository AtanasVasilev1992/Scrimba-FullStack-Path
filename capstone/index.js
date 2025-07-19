fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
        document.getElementById("author").innerHTML += `
        <p>${data.exif.make}<p>
        <p>${data.location.name}<p>
        `
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
         document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
            <p>🎯: € ${data.market_data.current_price.eur}</p>
            <p>👆: € ${data.market_data.high_24h.eur}</p>
            <p>👇: € ${data.market_data.low_24h.eur}</p>
        `
    })
    .catch(err => console.error(err))