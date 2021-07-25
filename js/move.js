document.onkeydown = function(event) {
    let e = event || window.event || arguments.callee.caller.arguments[0];
    switch(e.keyCode) {
        // 上移
        case 38:
        case 87:
            if(canMoveUp() == true)
                moveUp();
            break;
        // 下移
        case 40:
        case 83:
            if(canMoveDown() == true)
                moveDown();
            break;
        // 左移
        case 37:
        case 65:
            if(canMoveLeft() == true)
                moveLeft();
            break;
        // 右移
        case 39:
        case 68:
            if(canMoveRight() == true)
                moveRight();
            break;
        default:
            return;
    }
}

// 上移事件
// 1.能否上移
function canMoveUp() {
    for(let i = 1; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(date[i][j] != 0) {
                if(date[i-1][j] == 0 || date[i-1][j] == date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 2.实现上移
function moveUp() {
    for(let j = 0; j < 4; j++) {
        for(let i = 1; i < 4; i++) {
            if(date[i][j] != 0) {
                for(let k = 0; k < i; k++) {
                    if(date[k][j] == 0) {
                        date[k][j] = date[i][j];    
                        date[i][j] = 0;
                        break;
                    } else if(date[k][j] == date[i][j]) {
                        date[k][j] += date[i][j];
                        date[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
    console.log("上移：",date[0][0],date[0][1],date[0][2],date[0][3]);
    console.log("上移：",date[1][0],date[1][1],date[1][2],date[1][3]);
    console.log("上移：",date[2][0],date[2][1],date[2][2],date[2][3]);
    console.log("上移：",date[3][0],date[3][1],date[3][2],date[3][3]);
}
// 下移事件
// 1.能否下移
function canMoveDown() {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 4; j++) {
            if(date[i][j] != 0) {
                if(date[i+1][j] == 0 || date[i+1][j] == date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 2.实现下移
function moveDown() {
    for(let j = 0; j < 4; j++) {
        for(let i = 0; i < 3; i++) {
            if(date[i][j] != 0) {
                for(let k = 3; k > i; k--) {
                    if(date[k][j] == 0) {
                        date[k][j] = date[i][j];    
                        date[i][j] = 0;
                        break;
                    } else if(d0ate[k][j] == date[i][j]) {
                        date[k][j] += date[i][j];
                        date[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
    console.log("下：",date[0][0],date[0][1],date[0][2],date[0][3]);
    console.log("下：",date[1][0],date[1][1],date[1][2],date[1][3]);
    console.log("下：",date[2][0],date[2][1],date[2][2],date[2][3]);
    console.log("下：",date[3][0],date[3][1],date[3][2],date[3][3]);
}
// 左移事件
// 1.能否左移
function canMoveLeft() {
    for(let j = 1; j < 4; j++) {
        for(let i = 0; i < 4; i++) {
            if(date[i][j] != 0) {
                if(date[i][j-1] == 0 || date[i][j-1] == date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 2.实现左移
function moveLeft() {
    for(let i = 0; i < 4; i++) {
        for(let j = 1; j < 4; j++) {
            if(date[i][j] != 0) {
                for(let k = 0; k < j; k++) {
                    if(date[i][k] == 0) {
                        date[i][k] = date[i][j];    
                        date[i][j] = 0;
                        break;
                    } else if(date[i][k] == date[i][j]) {
                        date[i][k] += date[i][j];
                        date[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
    console.log("左移：",date[0][0],date[0][1],date[0][2],date[0][3]);
    console.log("左移：",date[1][0],date[1][1],date[1][2],date[1][3]);
    console.log("左移：",date[2][0],date[2][1],date[2][2],date[2][3]);
    console.log("左移：",date[3][0],date[3][1],date[3][2],date[3][3]);
}
// 右移事件
// 1.能否右移
function canMoveRight() {
    for(let j = 0; j < 3; j++) {
        for(let i = 0; i < 4; i++) {
            if(date[i][j] != 0) {
                if(date[i][j+1] == 0 || date[i][j+1] == date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 2.实现右移
function moveRight() {
    for(let i = 0; i < 4; i++) {
        for(let j = 2; j >= 0; j--) {
            if(date[i][j] != 0) {
                for(let k = 3; k > j; k--) {
                    if(date[i][k] == 0) {
                        date[i][k] = date[i][j];    
                        date[i][j] = 0;
                        break;
                    } else if(date[i][k] == date[i][j]) {
                        date[i][k] += date[i][j];
                        date[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
    console.log("右：",date[0][0],date[0][1],date[0][2],date[0][3]);
    console.log("右：",date[1][0],date[1][1],date[1][2],date[1][3]);
    console.log("右：",date[2][0],date[2][1],date[2][2],date[2][3]);
    console.log("右：",date[3][0],date[3][1],date[3][2],date[3][3]);
}