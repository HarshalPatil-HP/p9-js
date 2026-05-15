document.addEventListener("DOMContentLoaded", function () {

    let apiKey = "5010c7632cd8609a118cd8beab3afedb"
    let input = document.getElementById("input");

    document.querySelector(".button").addEventListener("click", () => {
        let city = input.value.trim();
        if (city === "") return;

        fetchdata(city);
    });

    async function fetchdata(city) {
        try {
            let res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            let data = await res.json();
            console.log(data);

            if (data.cod !== 200) {
                showerror(data.message);
                return;
            }

            let {
                name,
                main: { temp },
                weather: [{ main: weather }]
            } = data;

            renderdata(name, temp, weather);

        } catch (err) {
            showerror("Network error");
        }
    }

    function renderdata(name, temp, weather) {
        let container = document.getElementById("hidden");

        let cityEl = container.querySelector(".city");
        let tempEl = container.querySelector(".temp");
        let weatherEl = container.querySelector(".whether");

        container.style.display = "block";

        cityEl.innerText = `City: ${name}`;
        tempEl.innerText = `Temp: ${temp}°C`;
        weatherEl.innerText = `Weather: ${weather}`;
    }

    function showerror(msg) {
        let error = document.querySelector(".error");
        error.innerText = msg;
    }

});