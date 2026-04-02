// --- Hamburger Menu Logic ---
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        menuButton.innerHTML = 'X'; 
    } else {
        menuButton.innerHTML = '&#9776;'; 
    }
});

// --- Footer Date Logic ---
const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
currentYearElement.textContent = today.getFullYear();

const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

// --- Temple Array (Exactly 10 Temples: 7 Originals + 3 Reliable Additions) ---
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- New Reliable Additions ---
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149536-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  }
];

// --- Dynamic Card Rendering & Lazy Loading ---
function displayTemples(templeList) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content

    templeList.forEach(temple => {
        // Create the card section element
        const card = document.createElement("section");
        card.classList.add("temple-card");

        // Build the inner content string
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="card-label">Location:</span> ${temple.location}</p>
            <p><span class="card-label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="card-label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;
        
        gallery.appendChild(card);
    });
}

// Initial call to display all temples when the page loads
displayTemples(temples);

// --- Filtering Logic ---
function updateGallery(titleText, filteredList) {
    document.querySelector("#gallery-title").textContent = titleText;
    displayTemples(filteredList);
    // Remove active class from all nav links
    document.querySelectorAll('#nav-menu a').forEach(link => link.classList.remove('active'));
}

document.querySelector("#nav-old").addEventListener("click", (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    updateGallery("Old (Dedicated Before 1900)", oldTemples);
    e.target.classList.add('active');
});

document.querySelector("#nav-new").addEventListener("click", (e) => {
    e.preventDefault();
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    updateGallery("New (Dedicated After 2000)", newTemples);
    e.target.classList.add('active');
});

document.querySelector("#nav-large").addEventListener("click", (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    updateGallery("Large (Over 90,000 sq ft)", largeTemples);
    e.target.classList.add('active');
});

document.querySelector("#nav-small").addEventListener("click", (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    updateGallery("Small (Under 10,000 sq ft)", smallTemples);
    e.target.classList.add('active');
});

document.querySelector("#nav-home").addEventListener("click", (e) => {
    e.preventDefault();
    updateGallery("Home", temples); 
    e.target.classList.add('active');
});