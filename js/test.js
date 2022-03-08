'use strict'
//build mutiplicationArray - an array with arrays for a multiplication table.


let mutiplicationArray = [];
for(let i = 1; i <= 12; i++){
  let multiplicationRow = [];

  for(let j = 1; j <= 12; j++){ //<--- j makes it so we arent reusing i again. so we can multiply it later
    let product = i * j;//<--- we are 
    multiplicationRow.push(product);
  }
  multiplcationArray.push(multiplacationRow);

}
console.log(multiplcationArray);

// creat DOM table for multiplcationArray
let table = document.querySelector('table#multiplication');

let thead = document.createElement('thead');
let theadrow = document.createElement('tr');
let theadrow0 = document.createElement('td');
theadrow.appendChild(theadrow0);
for (let i = 0; i <=12; i++){
  let theadcell = document.createElement('th');
  theadcell.textContent = `${i}`;
  theadrow.appendChild(theadcell);
}

thead.appendChild(theadrow);

let tbody = document.createElement('tbody');
for(let i = 0; i < multiplcationArray.length; i++){
  let row = document.createElement('tr');


  for(let j = 0; j <multiplcationArray[i].length; j++){
    let product = multiplcationArray[i][j];

    let cell = document.createElement('td');
    cell.textContent = `${product}`;
    row.appendChild(cell);
  }

  tbody.appendChild(row);
  
}


table.appendChild(thead);
table.appendChild(tbody);

//thead is the label at the top (so like withdraw/deposit)
//tbody is the actual withdraw deposits
//tfoot is the total summary of all the transactions.
//tbody > tr > td:first-child{
