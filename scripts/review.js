document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current count from localStorage, or default to 0 if it doesn't exist yet
    let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

    // 2. Increment the count because a new review was just submitted
    reviewCount++;

    // 3. Save the updated count back to localStorage
    window.localStorage.setItem("reviewCount", reviewCount);

    // 4. Display the count on the page
    document.getElementById("review-counter").textContent = reviewCount;

    // Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});