/*
 * 高京
 * 20151112
 * 提示框弹层配套js 复制自爱传播
 */

var PromptLayer = {
    LayerID: "#PromptLayer", //常量
    global: null, //setTimeout全局变量
    Timer: 2500, //自动关闭等待时间(ms)
    callback_close: null, //将obj.callback_close转存为全局变量
    init: function() {


        //监听弹层点击事件：关闭弹层
        $(PromptLayer.LayerID).on("click", function() {
            PromptLayer.close(PromptLayer.callback_close);
        });
    },
    //弹框
    // obj {
    //     str: "提示内容",
    //     t: 0 - 自动关闭（默认） 1 - 不自动关闭,
    //     width:"宽度",  默认300
    //     height:"高度", 默认150
    //     unit:"px|vw", 默认px，且IE6/7/8强制使用px
    //     callback_open:function(){弹出后的回调方法},
    //     callback_close:function(){关闭后的回调方法}
    // }
    show: function(obj) {
        if (obj.str == undefined)
            obj.str = "";
        if (obj.t == undefined)
            obj.t = 0;
        if (obj.width == undefined)
            obj.width = 300;
        if (obj.height == undefined)
            obj.height = 150;
        if (obj.unit == undefined)
            obj.unit = "px";
        obj.unit = obj.unit.toLowerCase();
        PromptLayer.callback_close = obj.callback_close;

        $(PromptLayer.LayerID + " .PlaceContent").html(obj.str);

        //IE6/7/8强制使用px
        if (obj.unit != "px") {
            var browser = navigator.appName;
            if (browser == "Microsoft Internet Explorer") {
                var b_version = navigator.appVersion;
                var version = b_version.split(";");
                var trim_Version = version[1].replace(/[ ]/g, "");
                if (trim_Version == "MSIE6.0" || trim_Version == "MSIE7.0" || trim_Version == "MSIE8.0") {
                    obj.unit = "px";
                }
            }
        }

        //设置宽高
        $(PromptLayer.LayerID + "," + PromptLayer.LayerID + " .PlaceContent").css({
            "width": obj.width + obj.unit,
            "height": obj.height + obj.unit,
            "line-height": "25px"
        });


        //屏幕总宽度
        var zw = $(window).width();
        var zh = $(window).height();
        var w = $(PromptLayer.LayerID).width();
        var h = $(PromptLayer.LayerID).height();
        var left = (zw - w) / 2;
        var top = (zh - h) / 2;

        //滚动条
        var scrollTop = $(document).scrollTop();

        //设置top和left
        $(PromptLayer.LayerID).css({
            "top": top + scrollTop,
            "left": left
        });

        //显示遮罩层
        $("#PromptLayer_white").show(0);

        $(PromptLayer.LayerID).show(0, function() {
            if (obj.callback_open != null)
                obj.callback_open();
        });
        if (obj.t == 0) {
            PromptLayer.global = setTimeout(function() {
                PromptLayer.close(obj.callback_close);
            }, PromptLayer.Timer);
        }

    },
    //关闭弹框
    // callback_close：关闭后回调方法
    close: function(callback_close) {
        clearTimeout(PromptLayer.global);
        $(PromptLayer.LayerID + ",#PromptLayer_white").hide(0);
        $(PromptLayer.LayerID).hide(0, function() {
            $(PromptLayer.LayerID + " .PlaceContent").html("");
            if (callback_close != undefined) {
                callback_close();
            }
        });
    }
}
