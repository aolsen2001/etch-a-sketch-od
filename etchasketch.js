const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

/**
 * Create a new grid with the given size
 * 
 * @param {number} size the size of the new grid
 */
function createGrid(size) {
    // remove exisiting grid
    gridContainer.innerHTML = ''; 

    // define the size of each grid item
    const gridSize = 480;
    // itemSize is rounded to one decimal place to prevent the tiles from being placed outside the boundary
    const itemSize = Math.round((gridSize / size) * 10) / 10;

    // calculate the container size based on the item size and grid size
    gridContainer.style.width = `${itemSize * size}px`;
    gridContainer.style.height = `${itemSize * size}px`;

    // create the grid items and append them to the gridContainer
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;

        // allow for color to change on mouseenter
        div.addEventListener('mouseenter', (e) => {
            e.target.style.background = color;
        });

        gridContainer.appendChild(div);
    }
}

function clearGrid () {
    const tiles = gridContainer.children;
    for (var i = 0; i < tiles.length; ++i) {
        tiles[i].style.background = "white";
    }
}

/**
 * Toggle the eraser on
 */
function setEraser () {
    const tiles = gridContainer.children;
    for (var i = 0; i < tiles.length; ++i) {
        tiles[i].addEventListener('mouseenter', (e) => {
            e.target.style.background = "white";
        });
    }
}

/**
 * Toggle the eraser off
 */
function setBrush () {
    const tiles = gridContainer.children;
    for (var i = 0; i < tiles.length; ++i) {
        tiles[i].addEventListener('mouseenter', (e) => {
            e.target.style.background = color;
        });
    }
}

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;

const gridContainer = document.getElementById('grid-container');
const eraserToggle = document.getElementById('eraserToggle');
const clearButton = document.getElementById('clearButton');
const slider = document.getElementById("sizeSlider");
var sliderText = document.getElementById("sliderText");

// set slider to default size of 16
slider.value = size;
sliderText.innerHTML = ` ${size} x ${size}`;

createGrid(size);

clearButton.addEventListener("click", () => {
    clearGrid();
})

var eraserOn = false;
eraserToggle.addEventListener("click", () => {
    if (eraserOn === false) {
        setEraser();
        eraserOn = true;
        eraserToggle.textContent = 'Eraser On';
    } else {
        setBrush();
        eraserOn = false;
        eraserToggle.textContent = 'Eraser Off';
    }
})


// update size based on slider
slider.oninput = function () {
    size = slider.value;
    sliderText.innerHTML = ` ${size} x ${size}`;
    createGrid(size);
}


