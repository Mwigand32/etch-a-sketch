function buildGrid() {
    const container = document.querySelector('.container');
    let squareSize = 16;

    for(let i = 0; i < squareSize; i++){
        for(let j = 0; j < squareSize; j++){
            const square = document.createElement('div');
            square.setAttribute('style', 'width: 6.25%; background-color: #808080')
            container.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = '#000'
            })
        }
    }
}

buildGrid();