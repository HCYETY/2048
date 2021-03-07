// PC端的兼容,绑定keydown事件


// 键盘左右移动控制方格
document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    switch(e.keyCode) {
        case 38: // 上移
        case 87: // 上移
            if(!canMoveUp()) {
                break;
            } else {
                
                moveUp();
                break;
            }
        case 40: // 下移
        case 83: // 下移
            if(!canMoveDown()) {
                break;
            } else {
                game.moveDown();
                break;
            }
        case 37: // 左移
        case 65: // 左移
            if(!canMoveLeft()) {
                break;
            } else {
                game.moveLeft();
                break;
            }
        case 39: // 右移
        case 68: // 右移
            if(!canMoveRight()) {
                break;
            } else {
                game.moveRight();
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
                        date[t][i] = date[i][j];
                        date[i][j] = 0;
                        alert('game.date[t][j]')
                        console.log(t)
                        console.log(j)
                        console.log(date[t][j])
                        console.log(t)
                        console.log(i)
                        break;
                    } else if(date[t][j]==date[i][j] && noBlockVertical(j, t, i)) {
                        date[t][j] += date[i][j];
                        date[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}
// 下移事件
// a、判断格子是否可以下移
function canMoveUp() {
    for(var i=0; i<4; i++) {
        for(var j=1; j<4; j++) {
            if(date[i][j]!=0) {
                if(date[i+1][j]==0 || date[i+1][j]==date[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
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