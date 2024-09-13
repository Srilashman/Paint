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
                e.target.classList.remove("black");
                e.target.classList.remove("red");
                e.target.classList.remove("blue");
                e.target.classList.remove("green");
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
                e.target.classList.remove("black");
                e.target.classList.remove("red");
                e.target.classList.remove("blue");
                e.target.classList.remove("green");
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
            sq.classList.remove("black");
            sq.classList.remove("red");
            sq.classList.remove("blue");
            sq.classList.remove("green");
        }
    });
    const erase_button = document.getElementById("erase-button");
    erase_button.addEventListener("click", function() {
        erase = !erase;
        drawing = false;
        color = "black";

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
    function encoder() {
        let code = "";
        for (let i = 0; i < 625; i++) {
            const sq = document.getElementById(`square${i}`);
            const style = window.getComputedStyle(sq);
            const curr_color = style.backgroundColor;
            switch(curr_color) {
                case "rgb(255, 255, 255)": // white
                    code += '0';
                    break;
                case "rgb(0, 0, 0)": // black
                    code += '1';
                    break;
                case "rgb(255, 0, 0)": // red
                    code += '2';
                    break;
                case "rgb(0, 0, 255)": // green
                    code += '3';
                    break;
                case "rgb(0, 128, 0)": // blue
                    code += '4';
                    break;
                default:
                    code += curr_color;
                    break;
            }
        }
    
        // Ensure that the code string has exactly 625 characters
    
        console.log(code);
    
        return code;
    }
    
    
    function decoder(code) {
        console.log(code.length);
        if(code.length !== 625){
            alert("Invalid code");
            return -1;
        }
        return code;
    }
    
    
    
    const get_code = document.getElementById("generate-code");
    get_code.addEventListener("click", function() {
        let code = encoder();
        const print_code = document.getElementById("code");
        print_code.textContent = code;

    });
    const try_code = document.getElementById("use-code");
    try_code.addEventListener("click", function() {
        let use_code = document.getElementById("prev-code");
        let val = decoder(use_code.value);        
        if(val === -1){
            console.log("unexpected");
        }
        else if(val === 0){
            console.log("nothing")
        }
        else{
            colorboard(val);
        }
    });
    function colorboard(val){
        for(let i = 0; i < 625; i++){
            const clr = val[i];
            const sq = document.getElementById(`square${i}`);
            sq.classList.add("locked");
            sq.classList.remove("black");
            sq.classList.remove("red");
            sq.classList.remove("blue");
            sq.classList.remove("green");
            switch(clr){
                case '0':
                    sq.classList.remove("locked");
                    break;
                case '1':
                    sq.classList.add("black");
                    break;
                case '2':
                    sq.classList.add("red");
                    break;
                case '3':
                    sq.classList.add("blue");
                    break;
                case '4':
                    sq.classList.add("green");
                    break;
                default:
                    console.log("see");
            }
        }
    }
});