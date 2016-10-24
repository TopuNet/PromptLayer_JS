# PromptLayer JS插件 v2.0.1
###JS弹出消息层
###安装：npm install TopuNet-PromptLayer-JS

文件结构：
-------------
1. PromptLayer.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中

页面引用：
-------------

原生引用：

		1. 页面底端引用最新版 /inc/Jquery.min.js#1.x.x 或 zepto.min.js
		2. 后引用 /jq/PromptLayer.js

requireJS引用：

        1. 依赖PromptLayer.js和(jquery.min.js#1.x 或 zepto.min.js)，成功后返回对象PromptLayer

功能配置及启用：
--------------

1. 调用方法：

		var opt = {
    		str: "提示内容",
    		t: 0 - 自动关闭（默认） 1 - 不自动关闭,
    		width: 宽度,  默认300
    		height: 高度, 默认100
    		unit:宽高单位 "px|vw", 默认px，且IE6/7/8强制使用px
    		fontSize:"字体大小", 默认16。
    		fontUnit:字体单位 "px|vw", 默认px，且IE6/7/8强制使用px。
    		z_index: 弹层的z-index，内容盒为 z_index+1，默认400 
    		close_timer_ms: 弹层自动关闭时间，单位毫秒。默认2500
    		bg_Layer_color: 背景层颜色，默认#000
    		bg_Layer_opacity: 背景层透明度，默认0.4
    		callback_open:function(){弹出后的回调方法},
    		callback_close:function(){关闭后的回调方法}
    	}
		PromptLayer.show(opt);

2. 如想在一个项目中统一风格，可以直接修改PromptLayer.js源码中的默认参数或进行二次封装


更新历史：
--------------
2.0.1

		1. 重构。
		2. 在页面中省去加html代码和css文件的引用
		3. 增加参数：z_index、close_timer_ms、bg_Layer_color、bg_Layer_opacity，具体看调用方法的注释说明。
		4. 修改了之前发现的一些bug

1.2.6

	    1. 通过jshint验证

1.2.5

	    1. 修改bug：垂直不居中，dist中/inc/css不对

1.2.4

	    1. 在dist文件夹中，增加package.json
	    2. 将dist发布到npm：TopuNet-PromptLayer-JS

1.2.2

		1. 弹层前，让所有input和select失去焦点。解决软键盘弹出时，弹层居中不美观的问题

1.2.1

		1. 兼容原生JS和AMD规范
		2. 修改demo

1.1.4

		1. 修改移动端背景无透明度bug


1.1.3

		1. 修正小Bug

1.1.2

		1. 增加PC端重置窗口大小后的遮罩层大小重置及居中
		2. 修改px为单位时的居中问题
		3. 修正IE下的关闭bug

1.1.1

		1. 增加文字大小参数 fontSize:"字体大小", 默认16。
		2. 增加文字单位参数 fontUnit:"字体单位" "px|vw", 默认px，且IE6/7/8强制使用px。

1.0.1：

		完成基本功能