let drawing = false;
let erase = false;
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
            } else {
                e.target.classList.add("locked");
            }
            drawing = true;
        }
    });
    board.addEventListener("mousemove", function(e) {
        if(drawing && e.target.classList.contains("square")) {
            if (erase) {
                e.target.classList.remove("locked");
            } else {
                e.target.classList.add("locked");
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
});