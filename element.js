document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const symbol = params.get("symbol");

    const elements = {
        "H": { name: "Hydrogen", atomicNumber: 1, atomicMass: "1.008", description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe." },
        "He": { name: "Helium", atomicNumber: 2, atomicMass: "4.0026", description: "Helium is a noble gas used in balloons and cooling applications." },
        // Add all 118 elements...
    };

    const element = elements[symbol];

    if (element) {
        document.getElementById("element-details").innerHTML = `
            <h2>${element.name} (${symbol})</h2>
            <p>Atomic Number: ${element.atomicNumber}</p>
            <p>Atomic Mass: ${element.atomicMass}</p>
            <p>${element.description}</p>
        `;
    } else {
        document.getElementById("element-details").innerHTML = "<p>Element not found.</p>";
    }
});