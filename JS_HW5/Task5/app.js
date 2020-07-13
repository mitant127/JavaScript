"use strict";

const width = 10; // x
const height = 10; // y
let simbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];



document.body.insertAdjacentHTML("afterbegin", generateBoard(height, width));
generatorField(height, width);
generatorFrame(height, width);

function generateBoard(height, width) {
    let board = "";
    for (let y = 0; y < height; y++) {
        board += "<tr>";
        for (let x = 0; x < width; x++) {
            board += `<td data-x="${x}" data-y="${y}"></td>`;
        }
        board += "</tr>";
    }
    return `<table><tbody>${board}</tbody></table>`;
}

function generatorFrame(height, width) {
    for (let y = 0; y < height; y++) {
        if (y == 0 || y == 9) {
            for (let x = 0; x < width; x++) {
                document.querySelector(`[data-x="${x}"][data-y="${y}"]`).classList.add("frame");
            }
        } else {
            document.querySelector(`[data-x="0"][data-y="${y}"]`).classList.add("frame");
            document.querySelector(`[data-x="9"][data-y="${y}"]`).classList.add("frame");
        }
    }
    
//    add coordinates (numbers and simbols)
    for (let y = 0; y < 10; y++) {
        if (y == 0 || y == 9) {
            for (let x = 1; x < 9; x++) {
                document.querySelector(`[data-x="${x}"][data-y="${y}"]`).insertAdjacentHTML("afterbegin", simbols[x - 1])
            }
        } else {
            document.querySelector(`[data-x="0"][data-y="${y}"]`).insertAdjacentHTML("afterbegin", numbers[y - 1])
            document.querySelector(`[data-x="9"][data-y="${y}"]`).insertAdjacentHTML("afterbegin", numbers[y - 1])
        }
    }
//    
//    document.querySelector(`[data-x="1"][data-y="0"]`).insertAdjacentHTML("afterbegin", simbols[1])
////    for () {
//        
//    }
}


function generatorField() {
    for (let y = 1; y < 9; y++) {
        if ((y % 2) == 0) {
            for (let x = 1; x < 9; x = x + 2) {
                document.querySelector(`[data-x="${x}"][data-y="${y}"]`).classList.add("black");
            }
        } else {
            for (let x = 2; x < 9; x = x + 2) {
                document.querySelector(`[data-x="${x}"][data-y="${y}"]`).classList.add("black");
            }
        }

    }
}

// коды шахматных фигур
//https://www.ph4.ru/fonthtml_index.php?hot=%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D1%84%D0%B8%D0%B3%D1%83%D1%80%D1%8B
document.querySelector(`[data-x="${1}"][data-y="${1}"]`).insertAdjacentHTML("afterbegin", "&#9812")
document.querySelector(`[data-x="${2}"][data-y="${1}"]`).insertAdjacentHTML("afterbegin", "&#9813")

//console.log(height)