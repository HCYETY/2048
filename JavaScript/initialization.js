// 界面的基础显示部分


var game = {
    date:[], // 建立空数组存放游戏数据
    score:0, // 记录分数
    maxScore:0, // 记录最大分数
    Rscore:0, // 实时得分
    gameOver:0, // 游戏结束
    gameRunning:1, // 游戏运行时
    status:1, // 添加游戏状态
    start:function() {
        this.status = this.gameRunning;
        this.score = 0; // 游戏初始分数为0
        this.date = [];
        for(var r=0; r<4; r++) {
            this.date[r] = [];
            for(var c=0; c<4; c++) {
                this.date[r][c] = 0; // 将数组初始化
            }
        }
    }
}
// a、生成随机数2、4

for( ; ; ) {
    var r = Math.floor(Math.random()*4); // 获取行的随机数，并取整
    var c = Math.floor(Math.random()*4); // 获取列的随机数，并取整
    if(this.date[r][c] == 0) {
        var num = Math.random() > 0.5 ? 2 : 4; // 0.5说明产生随机数的概率为50%
        this.date[r][c] = num; // 将随机产生的数值赋给data的随机位置上
        break; // 退出循环
    }
}
// b、在获取到随机数后我们要将随机数放到这些格子中去
for(var r=0; r<4; r++) {
    for(var c=0; c<4; c++) {

    }
}