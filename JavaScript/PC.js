// PC端的兼容,绑定keydown事件


// 键盘“上下左右”移动控制方格
document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    switch(e.keyCode) {
        case 38: // 上移
        case 87: // 上移
            if(!canMoveUp()) {
                return false;
            } else {
                moveUp();
                break;
            }
        case 40: // 下移
        case 83: // 下移
            if(!canMoveDown()) {
                return false;
            } else {
                moveDown();
                break;
            }
        case 37: // 左移
        case 65: // 左移
            if(!canMoveLeft()) {
                return false;
            } else {
                moveLeft();
                break;
            }
        case 39: // 右移
        case 68: // 右移
            if(!canMoveRight()) {
                return false;
            } else {
                moveRight();
                break;
            }
    }
}
// 上移事件
// a、判断格子是否可以上移
function canMoveUp() {
    for(var i=1; i<4; i++) {
        for(var j=0; j<4; j++) {
            if(date[i][j]!=0) {
                if(date[i-1][j]==0 || date[i-1][j]==date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// b、怎么上移
function moveUp() {
    for(var j=0; j<4; j++) {
        for(var i=1; i<4; i++) {
            if(date[i][j]!=0) {
                for(var t=0; t<i; t++) {
                    if(date[t][j]== 0 && noBlockVertical(j, t, i)) {
                        date[t][j] = date[i][j];
                        date[i][j] = 0;
                    // console.log(i);
                    // console.log(j);
                    // console.log(t);
                    // console.log(date[t][j]);    
                    // console.log(date[t+1][j]);
                    // console.log(date[i][j]);
                        break;
                    } else if(date[t][j]==date[i][j] && noBlockVertical(j, t, i)) {
                        if(sign[t][j]==0) {
                            date[t][j] += date[i][j];
                            date[i][j] = 0;
                            sign[t][j] = 1;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        } else {
                            date[t][j] += date[i][j];
							date[i][j] = 0;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        }
                        break;
                    }
                }
            }
        }
    }
    randomNumber();
    console.log(date);
    return true;
}
// 下移事件
// a、判断格子是否可以下移
function canMoveDown() {
    for(var i=2; i>=0; i--) {
        for(var j=0; j<4; j++) {
            if(date[i][j]!=0) {
                if(date[i+1][j]==0 || date[i+1][j]==date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// b、怎么下移
function moveDown() {
    for(var j=0; j<4; j++) {
        for(var i=2; i>=0; i--) {
            if(date[i][j]!=0) {
                for(var t=3; t>i; t--) {
                    if(date[t][j]== 0 && noBlockVertical(j, i, t)) {
                        date[t][j] = date[i][j];
                        date[i][j] = 0;
                    // console.log(i);
                    // console.log(j);
                    // console.log(t);
                    // console.log(date[t][j]);    
                    // console.log(date[t+1][j]);
                    // console.log(date[i][j]);
                        break;
                    } else if(date[t][j]==date[i][j] && noBlockVertical(j, i, t)) {
                        if(sign[t][j]==0) {
                            date[t][j] += date[i][j];
                            date[i][j] = 0;
                            sign[t][j] = 1;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        } else {
                            date[t][j] += date[i][j];
							date[i][j] = 0;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        }
                        break;
                    }
                }
            }
        }
    }
    // randomNumber();
    console.log(date);
    return true;
}
// 判断竖直方向上两个格子之间有没有障碍物
function noBlockVertical(col, fromRow, toRow) {
    for(var i=fromRow+1; i<toRow; i++) {
        if(date[i][col]!=0) {
            return false;   
        }
    }
    return true;
}

// 左移事件
// a、判断格子是否可以左移
function canMoveLeft() {
    for(var i=0; i<4; i++) {
        for(var j=1; j<4; j++) {
            if(date[i][j]!=0) {
                if(date[i][j-1]==0 || date[i][j]==date[i][j-1]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// b、怎么左移
function moveLeft() {
    for(var i=0; i<4; i++) {
        for(var j=1; j<4; j++) {
            if(date[i][j]!=0) {
                for(var t=0; t<j; t++) {
                    if(date[i][t]==0 && noBlockVertical(i, t, j)) {
                        date[i][t] = date[i][j];
                        date[i][j] = 0;
                    // console.log(i);
                    // console.log(j);
                    // console.log(t);
                    // console.log(date[t][j]);    
                    // console.log(date[t+1][j]);
                    // console.log(date[i][j]);
                        break;
                    } else if(date[i][t]==date[i][j] && noBlockVertical(i, t, j)) {
                        if(sign[i][t]==0) {
                            date[i][t] += date[i][j];
                            date[i][j] = 0;
                            sign[i][t] = 1;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        } else if(sign[i][t]!=0) {
                            date[i][t] += date[i][j];
							date[i][j] = 0;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        }
                        break;
                    }
                }
            }
        }
    }
    randomNumber();
    console.log(date);
    return true;
}
// 右移事件
// a、判断格子是否可以右移
function canMoveRight() {
    for(var i=0; i<4; i++) {
        for(var j=2; j>=0; j--) {
            if(date[i][j]!=0) {
                if(date[i][j+1]==0 || date[i][j]==date[i][j+1]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// b、怎么右移
function moveRight() {
    for(var i=0; i<4; i++) {
        for(var j=2; j>=0; j--) {
            if(date[i][j]!=0) {
                for(var t=3; t>j; t--) {
                    if(date[i][t]== 0 && noBlockVertical(i, j, t)) {
                        date[i][t] = date[i][j];
                        date[i][j] = 0;
                    // console.log(i);
                    // console.log(j);
                    // console.log(t);
                    // console.log(date[t][j]);    
                    // console.log(date[t+1][j]);
                    // console.log(date[i][j]);
                        break;
                    } else if(date[i][t]==date[i][j] && noBlockVertical(i, j, t)) {
                        if(sign[i][t]==0) {
                            date[i][t] += date[i][j];
                            date[i][j] = 0;
                            sign[i][t] = 1;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        } else if(sign[i][t]!=0) {
                            date[i][t] += date[i][j];
							date[i][j] = 0;
                        // console.log(i);
                        // console.log(j);
                        // console.log(t);
                        // console.log(date[t][j]);
                        // console.log(date[t+1][j]);
                        // console.log(date[i][j]);
                        }
                        break;
                    }
                }
            }
        }
    }
    randomNumber();
    console.log(date);
    return true;
}
// 判断水平方向上两个格子之间有没有障碍物
function noBlockHorizontal(row, fromCol, toCol) {
    for(var i=fromCol+1; i<toCol; i++) {
        if(date[row][i]!=0) {
            return false;   
        }
    }
    return true;
}