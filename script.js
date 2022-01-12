const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};
const gridItems = document.getElementsByClassName('grid-item');
makeRows(prompt('How many rows do you want?'),prompt('How many columns do you want?'));

function hover(){
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener("mouseover", function(event){
      event.target.style.backgroundColor = "purple";
  })
})
}
hover();

function reset(){
  let resetButton = document.getElementsByClassName('reset');
  resetButton[0].addEventListener("click", window.location.reload())
}