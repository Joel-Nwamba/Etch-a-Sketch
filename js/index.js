const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const size = document.getElementById("size");
let row = 16;
let col = 16;



// create a grid 
function createGrid() {
    for(let i=0; i < (row * col); i++) {
        const grid = document.createElement("div");
        grid.addEventListener("mouseover", function(e) {
            e.target.classList.add("square");
        })
        grid.style.width = "30px";
        grid.style.height="25px";
        container.appendChild(grid);
        clearButton.addEventListener("click", function() {
            grid.classList.remove("square")
        });
    }
}

createGrid();
let prompUser=
size.addEventListener("click", function() {
   prompUser=prompt("Choose between 1-100");
   


})

