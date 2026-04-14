// 1. Objects & Arrays (Rubric Requirement)
const capsuleItems = [
    { id: "item1", name: "Classic Navy Blazer", category: "Outerwear", image: "images/blazer.jpg" },
    { id: "item2", name: "Linen Midi Dress", category: "Dresses", image: "images/dress.jpg" },
    { id: "item3", name: "Silk Sarong", category: "Accessories", image: "images/sarong.jpg" }
];

// 2. DOM Manipulation & Template Literals (Rubric Requirement)
function renderItems() {
    const container = document.querySelector('#clothing-grid'); 
    
    if (!container) return; // Only runs if the grid exists on the page
    
    container.innerHTML = ''; 
    
    // Array Method (forEach) & Template Literals
    capsuleItems.forEach(item => {
        const itemCard = `
            <div class="card">
                <img src="${item.image}" alt="${item.name}" loading="lazy"> 
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <button id="${item.id}" class="save-btn">Save to Capsule</button>
            </div>
        `;
        container.innerHTML += itemCard;
    });

    attachEventListeners();
}

// 3. Event Listeners, LocalStorage & Conditional Branching (Rubric Requirement)
function attachEventListeners() {
    const buttons = document.querySelectorAll('.save-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.id;
            
            let savedCapsule = JSON.parse(localStorage.getItem('myCapsule')) || [];
            
            // Conditional Branching
            if (!savedCapsule.includes(itemId)) {
                savedCapsule.push(itemId);
                localStorage.setItem('myCapsule', JSON.stringify(savedCapsule));
                alert('Added to your travel capsule!');
                e.target.textContent = "Saved";
            } else {
                alert('This item is already in your capsule.');
            }
        });
    });
}

// Dynamic Footer Date
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Initialize the app
renderItems();