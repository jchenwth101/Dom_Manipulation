var initialCell = 0; // the initial cell iteration javascript starts at 0

//create table element
var table = document.createElement('table');
table.style.border = '1px solid black';

//create table head
var tableHead = table.createTHead();

//create table head row
var headerRow = tableHead.insertRow();

//create the table head cells
for (var i = 1; i <= 4; i++) {
    var th = document.createElement('th') //create table head cell
    th.style.border = '1px solid black';
    var headerText = document.createTextNode('Header ' + i); //create cell text
    th.appendChild(headerText); //append text to table head cell
    headerRow.appendChild(th); //append table head cell to row
}

//create our table body
var tableBody = document.createElement('tbody');

for (var i = 1; i <=4; i++) {
    var singleRow = tableBody.insertRow(); //create a single row
    for (var g = 1; g <=4; g++) {
        var td = document.createElement('td') //create a single cell
        td.style.border = '1px solid black';
        var tdText = document.createTextNode(  i + ', ' + g); //create the cell text
        td.appendChild(tdText); //add the text to the cell
        singleRow.appendChild(td); //add the cell to the row
    }
}

//add our table body to the table
table.appendChild(tableBody);

//append table to body
document.body.appendChild(table);

var buttonList = ['up','down','left','right']; //an array of the button names
for (var i =0; i < buttonList.length; i++){
    var button = document.createElement('button'); //create button element
    button.id = buttonList[i]; // create the button id
    var buttonText = document.createTextNode(buttonList[i]); //create the text for the button

    button.addEventListener("click", function(event){ //add click event to the button
        MoveCell(event);
    });

    button.appendChild(buttonText); //append text to button
    document.body.appendChild(button); // append button to page
}

//select the first child of our table
var highlightedCell = document.getElementsByTagName('td')[initialCell]; //get our initial cell
highlightedCell.classList.add('highlight'); //add our class to the cell

//add out mark cell button
var button = document.createElement('button'); //create button element
var buttonText = document.createTextNode('Mark Cell'); //create the text for the button
button.addEventListener("click", function(){ //add click event to the button
    MarkCell();
});

button.appendChild(buttonText); //append text to button
document.body.appendChild(button); // app

function MoveCell(e) {
    // initialCell is 0 it's at the top
    var direction = e.target.id; //get our button id
    highlightedCell = document.getElementsByTagName('td')[initialCell]; //get our initial cell
    highlightedCell.classList.remove('highlight'); //remove the hightlight

    //using math to hight the cell
    switch(direction){
        case 'up': //move up if the highlighted cell is greater than position 3
            if (initialCell > 3) {
                initialCell -= 4;
            }
            break;
        case 'down':
            if (initialCell < 12) {
                initialCell += 4;
            }
            break;
        case 'left':
            if (initialCell > 0 && initialCell < 4) {
                initialCell--;
            }
            if (initialCell > 4 && initialCell < 8) {
                initialCell--;
            }
            if (initialCell > 8 && initialCell < 12) {
                initialCell--;
            }
            if (initialCell > 12 && initialCell < 16) {
                initialCell--;
            }
            break;
        case 'right':
            if (initialCell >= 0 && initialCell < 3) {
                initialCell++;
            }
            if (initialCell >= 4 && initialCell < 7) {
                initialCell++;
            }
            if (initialCell >= 8 && initialCell < 11) {
                initialCell++;
            }
            if (initialCell >= 12 && initialCell < 15) {
                initialCell++;
            }
            break;
    }
    highlightedCell = document.getElementsByTagName('td')[initialCell]; //get our initial cell
    highlightedCell.classList.add('highlight'); //add our class to the cell
}

function MarkCell() {
    highlightedCell = document.getElementsByTagName('td')[initialCell]; //get our initial cell
    //add our yellow class to the cell
    highlightedCell.classList.add('yellow'); //add our class to the cell
}
