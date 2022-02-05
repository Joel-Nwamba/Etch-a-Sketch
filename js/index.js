const container = document.getElementById("container");
const button = document.querySelector(".btn-grid");
let row = 16;
let col = 16


// create a grid 
function createGrid() {
    container.style.setProperty("color", "blue");
    for(let i = 0; i < (row * col); i++) {
        const grid = document.createElement("div");
        grid.style.backgroundColor = "#972900";
        grid.style.width = "30px";
        grid.style.height = "28px";
        grid.style.border = "5px solid blue";
        grid.classList.add("square")
        container.appendChild(grid);
    }
}

createGrid();