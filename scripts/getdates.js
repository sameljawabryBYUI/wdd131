// Select the DOM elements for output
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Use the Date object to get the current year
const today = new Date();
currentYear.innerHTML = today.getFullYear();

// Get the last modified date of the document
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;