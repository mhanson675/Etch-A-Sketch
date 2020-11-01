const container = document.getElementById('container');

function draw(e){
    e.target.classList.add('drawn');
}
function undraw(e){
    e.target.classList.remove('drawn');
}

function makeRows(rowCount, colCount){
    container.style.setProperty('--grid-rows', rowCount);
    container.style.setProperty('--grid-cols', colCount);

    for (index = 0; index < (rowCount * colCount); index++){
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', draw);
        cell.addEventListener('mousedown', undraw);
        container.appendChild(cell).className = 'grid-item';
    }
}

function defaultGrid(){
    makeRows(16, 16);
}

defaultGrid();