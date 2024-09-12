let drawing = false;
let erase = false;
let color = "black";
const root = document.documentElement;
root.style.setProperty("--bg-color", color);
document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("paint-board");
    for(let i = 0; i < 625; i++){
        const square = document.createElement("div");
        square.id = `square${i}`;
        square.classList.add("square");
        board.appendChild(square);
    }
    board.addEventListener("mousedown", function(e) {
        // Check if the clicked element is a square
        if(e.target.classList.contains("square")) {
            if (erase) {
                e.target.classList.remove("locked");
                e.target.classList.remove("black");
                e.target.classList.remove("red");
                e.target.classList.remove("blue");
                e.target.classList.remove("green");
            } else {
                e.target.classList.add("locked");
                e.target.classList.add(color);
            }
            drawing = true;
        }
    });
    board.addEventListener("mousemove", function(e) {
        if(drawing && e.target.classList.contains("square")) {
            if (erase) {
                e.target.classList.remove("locked");
                e.target.classList.remove("black");
                e.target.classList.remove("red");
                e.target.classList.remove("blue");
                e.target.classList.remove("green");
            } else {
                e.target.classList.add("locked");
                e.target.classList.add(color);
            }
        }
    });
    board.addEventListener("mouseup", function() {
        drawing = false;
    });
    board.addEventListener("mouseleave", function() {
        drawing = false; // Stop drawing/erasing when mouse leaves
    });

    const clear = document.getElementById("clear-button");
    clear.addEventListener("click", function() {
        for(let i = 0; i < 625; i++){
            const sq = document.getElementById(`square${i}`);
            sq.classList.remove("locked");
        }
    });
    const erase_button = document.getElementById("erase-button");
    erase_button.addEventListener("click", function() {
        erase = !erase;
        drawing = false;
    });
    const black = document.getElementById("black-color");
    const red = document.getElementById("red-color");
    const blue = document.getElementById("blue-color");
    const green = document.getElementById("green-color");
    black.addEventListener("click", function() {
        color = "black";
        root.style.setProperty("--bg-color", color);
    });
    red.addEventListener("click", function() {
        color = "red";
        root.style.setProperty("--bg-color", color);
    });
    blue.addEventListener("click", function() {
        color = "blue";
        root.style.setProperty("--bg-color", color);
    });
    green.addEventListener("click", function() {
        color = "green";
        root.style.setProperty("--bg-color", color);
    });
});