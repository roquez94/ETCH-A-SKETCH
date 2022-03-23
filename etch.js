const grid = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cells");

let rowNum;
let cellNum;

//Creates a default grid sized 16x16 
function gridMaker() {
    makeRows(rowNum);
    makeColumns(cellNum);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "gridRow";
       
    }
}

//Creates columns

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cells";

            //a “hover” effect so that the grid divs change color  
            newCell.addEventListener('mouseover', e => e.target.classList.add('hover-color'))
            newCell.addEventListener('mouseout', e => e.target.classList.remove('hover-color'))
        }
    }
}
//resets - clears grid
let reset = document.getElementById("reset");
reset.addEventListener('click', resetGrid);

function resetGrid () {
  grid.querySelectorAll('*').forEach(n => n.remove());
}

//creates new grid and prompts for new dimension size (also clears)
let newPlot = document.getElementById("new");
newPlot.addEventListener('click', newGrid);

function newGrid () {
  grid.querySelectorAll('*').forEach(n => n.remove());

	rowNum = prompt("Enter new grid size under 100") ;
  if (rowNum >=101) {
    alert ("Must enter grid size under 100");
    return;
  } else { 
  cellNum = rowNum;
  }
  gridMaker();
}
