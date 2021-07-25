var date = new Array();
// let start = document.getElementById("btn");
// start.addEventListener('click', startGame);
// function startGame() {
//     init();
// }
init();
function init() {
    // for循环用于二维数组初始化
    for(let i = 0; i < 4; i++) {
        date[i] = [];
        for(let j = 0; j < 4; j++) {
            date[i][j] = 0;
        }
    }
    randomNumber();
    randomNumber();
}
function randomNumber() {
    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);
    while(true) {
        if(date[row][col] == 0) {
            break;
        } else {
            row = Math.floor(Math.random() * 4);
            col = Math.floor(Math.random() * 4);
        }
    }
    let num = Math.random() < 0.3 ? 4 : 2;
    date[row][col] = num;
    showNumber(row, col);
}
function showNumber(row, col) {
    let div = document.getElementById("grid-cell-" + row + "-" + col);
    div.innerText = date[row][col];
    div.style.cssText = 'background:rgba(255, 136, 0, 0.582)';
}
