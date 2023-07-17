function buildGrid(squareSize) {
    const container = document.querySelector('.container');

    for(let i = 0; i < squareSize; i++){
        for(let j = 0; j < squareSize; j++){
            const square = document.createElement('div');
            square.setAttribute('style', `width: ${100 / squareSize}%; background-color: #808080`)
            container.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = '#000'
            })
        }
    }
}

function destroyGrid() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

function resetGrid() {
    let numberOfSquares = prompt("Please enter the size of your new sketch (1-100):");

    while(numberOfSquares > 100 || numberOfSquares < 1 || numberOfSquares === null || numberOfSquares === '') {
        if(numberOfSquares === null || numberOfSquares === '') {
            return;
        }
        numberOfSquares = prompt("Sorry, invalid size. Please enter the size of your new sketch (1-100):");
    }

    destroyGrid();
    buildGrid(numberOfSquares);
}

buildGrid(16);