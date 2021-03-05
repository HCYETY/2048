// 界面的基础显示部分


var game = {
    date:[], // 建立空数组存放游戏数据
    score:0, // 记录分数
    maxScore:0, // 记录最大分数
    Rscore:0, // 实时得分
    gameOver:0, // 游戏结束
    gameRunning:1, // 游戏运行时
    status:1, // 添加游戏状态
}
start();
randomNumber();
dateView();
function start() {
    this.status = this.gameRunning;
    this.score = 0; // 游戏初始分数为0
    this.date = [];
    for(var row=0; row<4; row++) {
        this.date[row] = [];
        for(var column=0; column<4; column++) {
            this.date[row][column] = 0; // 将数组初始化
        }
    }
}
// a、生成随机数2、4
function randomNumber() {
    while(1) {
        row = Math.floor(Math.random()*4); // 获取行的随机数，并取整
        column = Math.floor(Math.random()*4); // 获取列的随机数，并取整
        if(this.date[row][column] == 0) {
            var num = Math.random() < 0.3 ? 2 : 4; // 0.5说明产生随机数的概率为50%
            this.date[row][column] = num; // 将随机产生的数值赋给data的随机位置上
        } else {
            break; // 退出循环
            // row = random(0, 3);
			// column = random(0, 3);
        }
    }
}
// b、在获取到随机数后我们要将随机数放到这些格子中去
function dateView() {
    for(var row=0; row<4; row++) {
        for(var column=0; column<4; column++) {
            var div = document.getElementById("grid-cell-" + row + "-" + column);
            // 获取数组里面的相对应数的位置的ID
            if(date[row][column] == 0) {
                div.innerText = "";
                div.className = 'grid-cell';
                
            } else {
                div.innerText = this.date[row][column];
                div.className = 'grid-cell n'+this.date[row][column];
            }
        }
    }
}