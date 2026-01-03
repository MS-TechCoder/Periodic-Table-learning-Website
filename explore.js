// const elements = [
//     { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: "1.008" },
//     { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: "4.0026" },
//     // Add all 118 elements in this format...
// ];

// const table = document.getElementById("table");
// const elementInfo = document.getElementById("element-info");

// elements.forEach(el => {
//     const cell = document.createElement("div");
//     cell.classList.add("element");
//     cell.textContent = el.symbol;
//     cell.onclick = () => showDetails(el);
//     table.appendChild(cell);
// });

// function showDetails(element) {
//     elementInfo.innerHTML = `<h2>${element.name}</h2>
//         <p>Atomic Number: ${element.atomicNumber}</p>
//         <p>Atomic Mass: ${element.atomicMass}</p>`;
//     elementInfo.style.display = "block";
// }
const elements = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: "1.008", group: "nonmetal" },
    { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: "4.0026", group: "noble-gas" },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: "6.94", group: "alkali-metal" },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: "9.0122", group: "alkaline-earth-metal" },
    { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: "10.81", group: "metalloid" },
    { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: "12.011", group: "nonmetal" },
    { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: "14.007", group: "nonmetal" },
    { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: "15.999", group: "nonmetal" },
    { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: "18.998", group: "halogen" },
    { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: "20.180", group: "noble-gas" },
    // Add all 118 elements here
];

// Colors for different element groups
const groupColors = {
    "alkali-metal": "#ff6666",
    "alkaline-earth-metal": "#ffcc66",
    "transition-metal": "#ff9966",
    "metalloid": "#66cc66",
    "nonmetal": "#66ccff",
    "halogen": "#ff66cc",
    "noble-gas": "#cc99ff",
    "lanthanide": "#ffcc99",
    "actinide": "#ff99cc"
};

const table = document.getElementById("table");
const elementInfo = document.getElementById("element-info");

// Create periodic table dynamically
elements.forEach(el => {
    const cell = document.createElement("div");
    cell.classList.add("element");
    cell.textContent = el.symbol;
    cell.style.background = groupColors[el.group] || "#ddd"; // Assign color based on group
    
    // Show details on hover
    cell.onmouseover = () => showHoverDetails(el);
    cell.onmouseout = () => hideHoverDetails();
    
    // Click to open new page
    cell.onclick = () => window.location.href = `element.html?symbol=${el.symbol}`;
    
    table.appendChild(cell);
});

// Function to show element details on hover
function showHoverDetails(element) {
    elementInfo.innerHTML = `<h2>${element.name}</h2>
        <p>Atomic Number: ${element.atomicNumber}</p>
        <p>Atomic Mass: ${element.atomicMass}</p>`;
    elementInfo.style.display = "block";
}

// Function to hide element details when hover ends
function hideHoverDetails() {
    elementInfo.style.display = "none";
}