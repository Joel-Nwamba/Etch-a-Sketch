const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const changeSize = document.getElementById("size");
const square = document.createElement("div");
const colorChange = document.getElementById("change-color");
// create a grid 
function generateGrid(size) {
    let containerSize = Number(960);
    let gridSize = Number(size);
    for(let i=0; i < size; i++) {
        const rowcol = document.createElement("div");
        rowcol.classList.add("row")
            for(let i = 0; i < size; i++) {
                const square = document.createElement("div");
                square.setAttribute("class", "square");
                square.style.height = `${(containerSize/gridSize)}px`;
                square.style.width = `${(containerSize/gridSize)}px`;
                square.addEventListener("mouseover", () => {
                        square.style.backgroundColor = "black";
                    })
                    colorChange.addEventListener("click", function() {
                        square.addEventListener("mouseover", changeGridColor)
                    })
                    // square.addEventListener("mouseover", changeGridColor)
                clearButton.addEventListener("click", function() {
                    square.style.backgroundColor = "white";
                })
                
                rowcol.appendChild(square)
            }
            container.appendChild(rowcol);
            // container.style.setProperty('grid-template-columns', `repeat(${size}, 2fr)`);
            // container.style.setProperty('grid-template-rows', `repeat(${size}, 2fr)`);
    }

}

function changeGridColor(event) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    event.target.style.opacity = 0.1;
}



changeSize.addEventListener("click", function() {
    let usersChoice = prompt(`"How man squares per side would you like? (maximum length is 100)`);
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
     generateGrid(usersChoice)
    if(parseInt(usersChoice) > 100) {
        return 100;
    } else {
        return parseInt(usersChoice)
    }
    
});






generateGrid(16);
