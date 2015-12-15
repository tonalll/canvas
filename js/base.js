var zty = {
    style: {
        fillStyle: '#00000', //设置或返回用于填充绘画的颜色、渐变或模式
        strokeStyle: '#000000', //	设置或返回用于笔触的颜色、渐变或模式
        shadowColor: 'rgba(0, 0, 0, 0)', //设置或返回用于阴影的颜色
        shadowBlur: 'rgba(0, 0, 0, 0)', //设置或返回用于阴影的模糊级别
        shadowOffsetX: 0, //设置或返回阴影距形状的水平距离
        shadowOffsetY: 0, //设置或返回阴影距形状的垂直距离

        lineWidth: 1, //设置或返回当前的线条宽度
        lineCap: 'butt', //设置或返回线条的结束端点样式 butt默认平直的边缘。round圆形线帽。square正方形线帽。
        lineJoin: 'miter', //设置或返回两条线相交时，所创建的拐角类型 miter默认。创建尖角。 bevel创建斜角。round创建圆角。
        miterLimit: 10, //设置或返回最大斜接长度

        font: '10px sans-serif', //设置或返回文本内容的当前字体属性
        textAlign: 'start', //设置或返回文本内容的当前对齐方式
        textBaseline: 'alphabetic', //设置或返回在绘制文本时使用的当前文本基线

        globalAlpha: 1, //设置或返回绘图的当前 alpha 或透明值
        globalCompositeOperation: 'source-over', //设置或返回新图像如何绘制到已有的图像上

    },
    setCanvasStyle: function (_context2d, _option) {
        //        设置基本样式

    }
}