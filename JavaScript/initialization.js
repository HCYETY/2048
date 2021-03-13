// 界面的基础显示部分


var date = new Array(); // 建立空数组存放游戏数据
var sign = new Array();
var score = 0; // 记录分数
var bestScore = 0; // 记录最大分数
var rsCore = 0; // 实时得分
// var startX = 0;
// var startY = 0;
// var direction = 0;
// gameOver = 0; // 游戏结束
start();
function start() {
    score = 0; // 游戏初始分数为0
    bestScore = 0;
    date = [];
    for(row=0; row<4; row++) {
        date[row] = [];
        for(column=0; column<4; column++) {
            date[row][column] = 0; // 将数组初始化
        }
    }
    // 随机选择一个位置并获取两个随机数
    randomNumber();
    randomNumber();
    // 将随机数获取到格子中去
    dateView();
}

$('head_y2').onclick = function newGame() {

    start();
}

// a、随机选择一个位置并获取两个随机数2、4
function randomNumber() {
    if (noSpace()) return false; //判断是否还有空格子
    row = Math.floor(Math.random()*4); // 获取行的随机数，并取整
    column = Math.floor(Math.random()*4); // 获取列的随机数，并取整
    while(1) {
        if(this.date[row][column] == 0) {
            break;
        } else {
            row = Math.floor(Math.random()*4);
            column = Math.floor(Math.random()*4);
        }
    }
    var num = Math.random() < 0.3 ? 2 : 4; // 0.5说明产生随机数的概率为50%
    date[row][column] = num; // 将随机产生的数值赋给data的随机位置上
    showNumberEffect(row,column,num);
    return true;
}
// b、将随机数获取到格子中去
function dateView() {
    for(row=0; row<4; row++) {
        for(column=0; column<4; column++) {
            $(".body").append('<div class="number-cell" id="number-cell-' + row + '-' + column + '"></div>');
			var  numberCell= $("#number-cell-" + row + "-" + column);
            var div = document.getElementById("grid-cell-" + row + "-" + column);
            // 获取数组里面的相对应数的位置的ID
            if(date[row][column] == 0) {
                div.innerText = "";
                div.className = 'grid-cell';
                numberCell.css("width", "0px");
				numberCell.css("height", "0px");
            } else {
                div.innerText = date[row][column];
                div.className = 'grid-cell n'+date[row][column];
                numberCell.css("width", "112px;");
				numberCell.css("height", "112px;");
				numberCell.css("background-color", numberBoxColor(date[row][column]));
				numberCell.css("color", numberColor(date[row][column]));
				numberCell.text(date[row][column]);
            }
        }
    }
}
//实时改变分数
function changeScore() {
	$("#score").html(score);
	changeBestScore();
}

// 实时改变最高分数
function changeBestScore() {
	let tem = $('bestScore') || 0;
	if (score > tem) {
		tem = score;
	}
	$('#bestScore').html(tem);
}