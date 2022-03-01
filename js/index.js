const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const changeSize = document.getElementById("size");
let sizeLength = 16;
// let row = 16;
// let col = 16;
container.style.gridTemplateColumns = (`repeat( ${sizeLength}, 1fr)`)
// create a grid 
function generateGrid(size) {
    getNewSize() 
//    newFunction();
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

    function getNewSize() {
        let sizeLength;
        if (size > 100) {
            alert("Maximum is the number 100");
            sizeLength = 100;
        } else {
            sizeLength = size;
        }
    }
}

// function getNewSize() {
//     changeSize.addEventListener("click", function() {
//         let usersChoice = prompt("What size would you like to go with");
//         if(parseInt(usersChoice) > 100) {
//             return 100;
//         } else {
//             return parseInt(usersChoice);
//         }
//     })
// }

// let size = getNewSize()



generateGrid(16)



