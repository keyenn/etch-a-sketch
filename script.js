let container = document.querySelector("#container");
let rows = 16;
let columns = 16;

createGrid(rows, columns);

let btn = document.querySelector(".btn");
document.querySelectorAll(".square").forEach(square => {
    btn.addEventListener("click", event => {
        square.style.backgroundColor = "white";
    });
});
btn.addEventListener("click", function(e) {
    removeSquares("square");
    let newSize = prompt("Select new gid size between 5 and 64");
    if (newSize >= 5 && newSize <= 64)
    {
        rows = newSize;
        columns = newSize;
        createGrid(rows, columns);
    }
    else
    {
        prompt("Please select a number between 5 and 64");
    }
});

let reset = document.querySelector(".rst")
reset.addEventListener("click", function(e) {
    removeSquares("square");
    createGrid(16, 16);
});


function createSquares(numSquares) 
{
    for (i = 0; i < numSquares; i++)
    {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        });
    }
}


function createGrid(rows, columns)
{
    container.style.setProperty("--rows", rows);
    container.style.setProperty("--columns", columns);
    for (i = 0; i < rows; i++)
    {
        createSquares(i);
    }
    for (i = 0; i <= columns; i++)
    {
        createSquares(i);
    }
}


function removeSquares(className)
{
    let squares = document.getElementsByClassName(className);
    while (squares.length > 0)
    {
        squares[0].parentNode.removeChild(squares[0]);
    }
}