// PC端的兼容,绑定keydown事件
// 键盘左右移动控制方格
document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    switch(e.keyCode) {
        case 38 || 87: // 上移
            game.moveUp();
            break;
        case 40 || 83: // 下移
            game.moveDown();
            break;
        case 37 || 65: // 左移
            game.moveLeft();
            break;
        case 39 || 68: // 右移
            game.moveRight();
            break;
    }
}