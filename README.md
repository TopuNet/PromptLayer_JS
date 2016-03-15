# PromptLayer JS插件 v1.1.2
###JS弹出消息层

1.1.2 更新记录：
-------------
1. 增加PC端重置窗口大小后的遮罩层大小重置及居中
2. 修改px为单位时的居中问题
3. 修正IE下的关闭bug

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
