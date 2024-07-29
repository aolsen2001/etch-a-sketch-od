const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;

function createGrid(size) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // Clear any existing grid

    // define the size of each grid item
    const gridSize = 480;
    // itemSize is rounded to one decimal place to prevent the tiles from being placed outside the boundary
    const itemSize = Math.round((gridSize / size) * 10) / 10;

    // calculate the container size based on the item size and grid size
    gridContainer.style.width = `${itemSize * size}px`;
    gridContainer.style.height = `${itemSize * size}px`;

    // create the grid items
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;

        div.addEventListener('mouseenter', (e) => {
            e.target.style.background = color;
        });
        // div.addEventListener('mouseleave', (e) => {
        //     e.target.style.background = "white";
        // })

        gridContainer.appendChild(div);
    }
}

createGrid(16);

const sizeButton = document.getElementById('resize');
const sizePrompt = document.getElementById('sizeprompt');
const slider = document.getElementById("sizeSlider");
var sliderText = document.getElementById("sliderText");

// set slider to default size of 16
slider.value = 16;
sliderText.innerHTML = slider.value; 

// update size based on slider
slider.oninput = function() {
  sliderText.innerHTML = this.value;
  createGrid(this.value);
} 


