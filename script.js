
async function fetchUrl(city) {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b92e57938eaebc6ded1fcf3a2f5b4bc3&units=metric`
        let raw = await fetch(url);
        if (!raw.ok) {
            throw new Error("Please check city name :")
        }
        let real = await raw.json()
        // console.log(real)
        if (real.main.temp < 25) {
            console.warn("Bahuuuut thand hai ")
        } else if (real.main.temp > 32) {
            console.warn("Bahuut garm hai")
        }
    } catch (err) {
        console.log(err);
    }
}

fetchUrl("Lakhimpur")

