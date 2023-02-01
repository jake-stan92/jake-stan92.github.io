// parent container for grid
const container = document.querySelector('#grid');

// prompt Button ID
let promptButton = document.getElementById('promptButton');

// reset Button ID
let resetButton = document.getElementById('resetButton');

// grid Size ID
const gridSize = document.querySelector('.grid');

// Default size
const defaultSize = 10;

// create default grid
function createGrid(num) {    

    // create grid of squares
    size = Math.pow(num, 2);
    for (i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);        
    };

    // set gridsize 
    gridSize.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr`);  

    //change color of background once entered
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseenter', function() {        
            squares[i].setAttribute('style', `background-color: ${randomColor()};`)
        });
    };
};

createGrid(defaultSize);  

// add listener and function to promptButton
promptButton.addEventListener('click', function() {
    // remove current children to replace with new
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }; 
    let number = prompt('Choose number');  
   
    if (number < 1 || number > 100) {
        alert('Please choose a number between 1-100\nSwitching to default 10x10')
        number = defaultSize;
    };
      
    createGrid(number);
});

//add listener for reset button function
resetButton.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {        
        squares[i].setAttribute('style', 'background-color: white;')
    };    
});

function randomColor() {
    let color1 = Math.floor(Math.random() * 256).toString();
    let color2 = Math.floor(Math.random() * 256).toString();
    let color3 = Math.floor(Math.random() * 256).toString();
    let randColor = `rgb(${color1}, ${color2}, ${color3})`
    console.log(randColor);
    return randColor;    
};