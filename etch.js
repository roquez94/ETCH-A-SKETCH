window.onload = function() {
  let size = 5;
  let grid = document.getElementById("container");
  
  //rows
  for (let i = 1; i <= size; i++){

    //columns
    for (let j = 1; i <= size; j++){
        let  gridDiv = document.createElement('div');
          grid.appendChild(gridDiv);
          gridDiv.className = 'color';
    }
  }
};
