const container = document.getElementById("container");


// create a grid 
function createGrid(rows, cols) {
    container.style.setProperty("color", "blue");
    for(let i = 0; i < (rows * cols); i++) {
        const grid = document.createElement("div");
        grid.classList.add("square")
        container.appendChild(grid);
    }
}

createGrid(16, 16);