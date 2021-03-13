function showNumberEffect(i,j,number) {
    var numberCell = $('#grid-cell-' + i + '-' + j);	
    for(i=0; i<4; i++) {
        for(j=0; j<4; j++) {
            $(numberCell).css('background-color', numberBoxColor(number));
            $(numberCell).css('color', numberColor(number));
        }
    }
}
// 方格移动时背景变化
// function showMoveEffect(row, col){
// 	var numberCell2 = $("#grid-cell-" + row + "-" + col);
//     $(numberCell2).css('background-color', numberBoxColor());
//     $(numberCell2).css('color', numberColor());
// }

// 数字格子的背景颜色
function numberBoxColor(number) {
    switch(number) {
        case 2:return"rgb(250, 225, 188)";
        case 4:return"rgb(202, 240, 240)";
        case 8:return"rgb(117, 231, 193)";
        case 16:return"rgb(240, 132, 132)";
        case 32:return"rgb(181, 240, 181)";
        case 64:return"rgb(182, 210, 246)";
        case 128:return"rgb(255, 207, 126)";
        case 256:return"rgb(250, 216, 216)";
        case 512:return"rgb(124, 183, 231)";
        case 1024:return"rgb(225, 219, 215)";
        case 2048:return"rgb(221, 160, 221)";
        case 4096:return"rgb(250, 139, 176)";
    }
}
// 数字的颜色
function numberColor(number) {
    if(number<=4) return "#776e65";
    else return "white";
}