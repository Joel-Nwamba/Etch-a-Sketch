const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const changeSize = document.getElementById("size");
let row = 16;
let col = 16;

// create a grid 
function generateGrid() {
    let size
    if(size > 100) {
        alert("maximum is 100")
        size = 100;
    }
    for(let i=0; i < row; i++) {
        const rowcol = document.createElement("div");
        rowcol.classList.add("row")
            for(let i = 0; i < col; i++) {
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

function getNewSize() {
    let usersChoice = prompt("What size would you like to go with");
    if(parseInt(usersChoice) > 100) {
        return 100;
    } else {
        return parseInt(usersChoice);
    }
}



generateGrid()



