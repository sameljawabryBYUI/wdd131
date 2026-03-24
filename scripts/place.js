// 1. Dynamic Footer Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// 2. Wind Chill Logic
// Matches the static values hardcoded in the HTML
const temp = 8; // °C
const windSpeed = 15; // km/h

// Function uses ONE line of code
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

// Select the HTML element where the output will go
const windChillSpan = document.getElementById("windchill");

// Condition check (Metric: Temp <= 10°C AND Wind > 4.8 km/h)
if (temp <= 10 && windSpeed > 4.8) {
    // If true, call the function and display the result
    windChillSpan.innerHTML = `${calculateWindChill(temp, windSpeed)} &deg;C`;
} else {
    // If false, display N/A
    windChillSpan.innerHTML = "N/A";
}