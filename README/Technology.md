界面设计：
1、边框圆角：CSS圆角只需设置一个属性：border-radius（含义是"边框半径"）。所有合法的CSS度量值都可以使用：em、ex、pt、px、百分比等等。
如果设置1个值，表示4个圆角都使用这个值；
如果设置2个值，表示左上角和右下角使用第一个值，右上角和左下角使用第二个值；
如果设置3个值，表示左上角使用第一个值，右上角和左下角使用第二个值，右下角使用第三个值；
如果设置4个值，则依次对应左上角、右上角、右下角、左下角（顺时针顺序）。

border-radius还可以用斜杠设置第二组值：第一组值表示水平半径，第二组值表示垂直半径。第二组值也可以同时设置1到4个值，应用规则与第一组值相同。

除了同时设置四个圆角以外，还可以单独对每个角进行设置。对应四个角，CSS3提供四个单独的属性：
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius
这四个属性都可以同时设置1到2个值。如果设置1个值，表示水平半径与垂直半径相等。如果设置2个值，第一个值表示水平半径，第二个值表示垂直半径。

2、边框阴影：box-shadow:5px 2px 6px #000;
数值从左至右：阴影水平偏移值（正值向右，负值向左）；阴影垂直偏移值（正值向下，负值向上）；阴影模糊值；阴影颜色。
为了突显立体感，要让阴影左右重中间轻，这里使用了::before,::after伪元素，创建并让它们定位在#Demo元素后(z-index:-1)，同时设置阴影，并设置旋转。