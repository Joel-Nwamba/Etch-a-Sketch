const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const changeSize = document.getElementById("size");
let sizeGrid = 16;
// let row = 16;
// let col = 16;
container.style.gridTemplateColumns = (`repeat( ${sizeLength}, 1fr)`)
// create a grid 
function generateGrid(size) {
    if (size > 100) {
        window.alert("100 is the max height");
         sizeGrid = 100;
    }
    for(let i=0; i < size; i++) {
        const rowcol = document.createElement("div");
        rowcol.classList.add("row")
            for(let i = 0; i < size; i++) {
                const square = document.createElement("div");
                square.setAttribute("class", "square");
                square.addEventListener("mouseover", () => {
                        square.style.backgroundColor = "black";
                    })
                clearButton.addEventListener("click", function() {
                    square.style.backgroundColor = "white";
                })
                // square.style.width = "30px"
                // square.style.height = "28px"
                rowcol.appendChild(square)
            }
            container.appendChild(rowcol)
    }

}

function chooseGridSize() {
    
}

generateGrid(16);
