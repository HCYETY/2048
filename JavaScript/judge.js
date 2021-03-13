//判断是否还有空格子
function noSpace(){
	for(var i=0 ;i<4; i++){
		for(var j=0; j<4; j++){
			if(date[i][j]== 0)  return false;
		}
	}
	return true;
}
//判断是否还有可以移动的盒子
function noMove(){
	if(canMoveLeft() || canMoveRight() || canMoveUp() || canMoveDown()) {
        return false;
    } else {    
        return true;
    }
}
// 判断游戏结束
function gameOver() {
    for(var r=0; r<4; r++) { // 对行进行遍历
        for(var c=0; c<4; c++) { // 对列进行遍历
            if(this.date[r][c] == 0) { // 看数组中是否有空位
                return false; // 游戏不结束
            }
            if(c<3) {
                if(this.date[r][c] == this.date[r][c+1]) { // 判断每一行左右是否有相等的值,每一行r不变,c+1
                    return false; // 游戏不结束
                }
            }
            if(r<3) {
                if(this.date[r][c] == this.date[r+1][c]) { // 判断每一行上下是否有相等的值,每一行r+1,c不变
                    return false; // 游戏不结束
                }
            }
        }
    }
    return true; // 全部判断完了，游戏结束
}
//游戏结束
function isGameOver(){
	if(noSpace() && noMove()) gameOver();
}