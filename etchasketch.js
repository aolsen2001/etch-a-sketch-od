function createGrid(size) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // Clear any existing grid

    // define the size of each grid item
    const gridSize = 480;
    const itemSize = gridSize / size; 

    // calculate the container size based on the item size and grid size
    gridContainer.style.width = `${itemSize * size}px`;
    gridContainer.style.height = `${itemSize * size}px`;

    // create the grid items
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;

        div.addEventListener('mouseover', (e) => {
            e.target.style.background = "blue";
        });
        div.addEventListener('mouseleave', (e) => {
            e.target.style.background = "white";
        })

        gridContainer.appendChild(div);
    }
}

const sizeButton = document.getElementById('resize');
sizeButton.addEventListener('Click', (e) => {
    console.log('clicked');
    let size = 0;
    while (size < 0 || size > 100) {
        size = prompt("Enter a new size between 1 and 100");
    }
})


createGrid(16);
