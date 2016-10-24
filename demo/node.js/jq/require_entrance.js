require(["PromptLayer", "/inc/jquery.min.js"], function($PromptLayer) {

    $(function() {
        $("input[type=button]").click(function() {
            var opt = {
                str: "提交成功", //弹出层显示文字内容，支持HTML标签
                t: 1, //0 - 2.5s后自动关闭（默认） 1 - 不自动关闭,
                width: 300, //弹层宽度，默认300
                height: 100, //弹层高度，默认100
                unit: "px", //单位（px或vw），默认px，且IE6/7/8强制使用px。
                fontSize: 16, //字体大小，默认16。
                fontUnit: "px", //字体单位（px或vw），默认px，且IE6/7/8强制使用px。
                callback_open: function() {
                    console.log("弹出后的回调方法");
                },
                callback_close: function() {
                    console.log("关闭后的回调方法");
                }
            }
            $PromptLayer.show(opt);
        });
    });
});
