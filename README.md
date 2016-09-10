# PromptLayer JS插件 v1.2.6
###JS弹出消息层
###安装：npm install TopuNet-PromptLayer-JS

文件结构：
-------------
1. PromptLayer.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中
2. PromptLayer.css 放入项目文件夹css中

页面引用：
-------------
1. 在页面中引用html代码块：

		<div id="PromptLayer_white"></div>
		<div id="PromptLayer">
		    <table>
		        <tr>
		            <td class="PlaceContent"></td>
		        </tr>
		    </table>
		</div>
		根据项目语言，可将上述代码制作为引用页面复用（如ascx或html）
2. 页面<head>中引用/css/PromptLayer.css

原生引用：

		3. 页面底端引用最新版 /inc/Jquery.min.js#1.x.x 或 zepto.min.js
		4. Jquery后引用 /jq/PromptLayer.js

requireJS引用：

        3. 依赖PromptLayer.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象PromptLayer
        4. 执行PromptLayer.init();

功能配置及启用：
--------------

1. 调用方法：

		var obj= {
			str: "提交成功", //弹出层显示文字内容
			t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
			width: 300,  //弹层宽度，默认300
			height: 100, //弹层高度，默认100
			unit:"px", //宽高单位（px或vw），默认px，且IE6/7/8强制使用px。
			fontSize:16, //字体大小，默认16。
			fontUnit:"px", //字体单位（px或vw），默认px，且IE6/7/8强制使用px。
			callback_open:function(){
				console.log("弹出后的回调方法");
			},
			callback_close:function(){
				console.log("关闭后的回调方法");
			}
		}
		PromptLayer.show(obj);

2. 如想在一个项目中统一风格，可以直接修改PromptLayer.js源码中的默认参数或进行二次封装


更新历史：
--------------
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