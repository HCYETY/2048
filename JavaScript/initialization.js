// 界面的基础显示部分

var date = new Array([],[]); // 建立空数组存放游戏数据
// for(var i=0; i<date.length; i++) {
//     date[i] = new Array();
// }
var sign = new Array([],[]); // 建立空数组标记合并过的格子
// for(var j=0; j<sign.length; j++) {
//     date[j] = new Array();
// }
var game = {
    score:0, // 记录分数
    maxScore:0, // 记录最大分数
    Rscore:0, // 实时得分
    gameOver:0, // 游戏结束
    gameRunning:1, // 游戏运行时
    status:1, // 添加游戏状态
}
start();
randomNumber();
randomNumber();
dateView();
function start() {
    status = this.gameRunning;
    score = 0; // 游戏初始分数为0
    date = [];
    for(row=0; row<4; row++) {
        date[row] = [];
        for(column=0; column<4; column++) {
            date[row][column] = 0; // 将数组初始化
        }
    }
}
// a、生成随机数2、4
function randomNumber() {
    row = Math.floor(Math.random()*4); // 获取行的随机数，并取整
    column = Math.floor(Math.random()*4); // 获取列的随机数，并取整
    while(1) {
        if(this.date[row][column] == 0) {
            break;
        } else {
            row = random(0, 3);
			column = random(0, 3);
        }
    }
    var num = Math.random() < 0.3 ? 2 : 4; // 0.5说明产生随机数的概率为50%
    date[row][column] = num; // 将随机产生的数值赋给data的随机位置上
}
// b、将随机数获取到格子中去
function dateView() {
    for(row=0; row<4; row++) {
        for(column=0; column<4; column++) {
            var div = document.getElementById("grid-cell-" + row + "-" + column);
            // 获取数组里面的相对应数的位置的ID
            if(date[row][column] == 0) {
                div.innerText = "";
                // div.className = 'grid-cell';
            } else {
                div.innerText = date[row][column];
                // div.className = 'grid-cell n'+date[row][column];
            }
        }
    }
}