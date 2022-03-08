const container = document.getElementById("container");
const clearButton = document.getElementById("clear-grid");
const changeSize = document.getElementById("size");
const square = document.createElement("div");
// let row = 16;
// let col = 16;
// container.style.gridTemplateColumns = (`repeat( ${sizeLength}, 1fr)`)
// create a grid 
function generateGrid(size) {
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
                    // let usersInput = prompt(`"How many squares per side you'd like for the new grid? (max:64)"`);
                    // if(usersInput > 64) {
                    //     alert("Please enter a lesser number.")
                    // } else {
                    //     return size;
                    // }
                })
                
                rowcol.appendChild(square)
            }
            container.appendChild(rowcol)
    }

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
