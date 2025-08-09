async function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "6748fd3dc0b0400491172623250908"; // Your API Key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Location not found");
        }
        const data = await response.json();

        const temp = data.current.temp_c; // Temperature in Celsius
        const condition = data.current.condition.text;

        document.getElementById("result").innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Condition:</strong> ${condition}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
