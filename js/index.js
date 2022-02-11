const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
let row = 16;
let col = 16;
let squares = [];


// create a grid 
function createGrid() {
    container.style.setProperty("color", "blue");
    for(let i = 0; i < (row * col); i++) {
        const grid = document.createElement("div");
        grid.addEventListener("mouseover", function(e) {
            e.target.classList.add("square");
        })
        grid.textContent = "X";
        grid.style.width = "30px";
        grid.style.height = "25px";
        grid.style.border = "5px solid blue";
        container.appendChild(grid);
        squares.push(grid);
        clearButton.addEventListener("click", function() {
            grid.style.backgroundColor = "none";
            grid.classList.remove("square");
        })
    }

}

createGrid();
