# PromptLayer JS插件 v1.1.1
###JS弹出消息层

1.1.1 更新记录：
-------------
1. 增加文字大小参数 fontSize:"字体大小", 默认16。
2. 增加文字单位参数 fontUnit:"字体单位" "px|vw", 默认px，且IE6/7/8强制使用px。

文件结构：
-------------
1. PromptLayer.js 放入项目文件夹jq中
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

2. 页面底端引用最新版 /inc/Jquery.min.js#1.x.x
3. Jquery后引用 /jq/PromptLayer.js
4. 页面<head>中引用/css/PromptLayer.css

功能配置及启用：
--------------
1. 页面底部调用初始化方法：

		$(function() {
	        PromptLayer.init();
	    });

2. 调用方法：

		var obj= {
			str: "提交成功", //弹出层显示文字内容
			t: 0, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
			width: 300,  //弹层宽度，默认300
			height: 150, //弹层高度，默认150
			unit:"vw", //宽高单位（px或vw），默认px，且IE6/7/8强制使用px。
			fontSize:1.5, //字体大小，默认16。
			fontUnit:"vw", //字体单位（px或vw），默认px，且IE6/7/8强制使用px。
			callback_open:function(){
				console.log("弹出后的回调方法");
			},
			callback_close:function(){
				console.log("关闭后的回调方法");
			}
		}
		PromptLayer.show(obj);
