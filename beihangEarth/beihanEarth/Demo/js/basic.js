/**
 * Created by SSXT034 on 2017/3/30.
 */



$(function () {


    //    $(".ks_panel").find(".ks_open").each(function(){  //自动遍历模块是否需要添加 + 按钮
    //    if ($(this).parent().find(".ks_body").outerHeight(true) > $(this).parent().height() - $(this).parent().find(".ks_title").outerHeight(true)) {
    //        $(this).css({
    //            "background": "url(../pages/assets/img//main/open.png) no-repeat",
    //            "display": "block"
    //        });
    //    }else{
    //        $(this).css({
    //            "display": "none"
    //        });
    //    }
    //});
    //
    //$(".ks_panel").find(".ks_open").on("click", function () {   //点击 + 按钮下拉显示所有内容
    //    if (!$(this).attr("open")) {
    //        $(this).parent().stop(true).animate({
    //            "height": $(this).parent().find(".ks_body").outerHeight(true) + $(this).parent().find(".ks_title").outerHeight(true) + "px"
    //        }, "slow").end().css({
    //            "background": "url(../pages/assets/img//main/close.png) no-repeat"
    //        }).attr("open", "true");
    //    } else {
    //        $(this).parent().stop(true).animate({
    //            "height": 200 + "px"
    //        }, "slow").end().css({
    //            "background": "url(../pages/assets/img//main/open.png) no-repeat"
    //        }).removeAttr("open");
    //    }
    //});
    //
    //
    //$(window).resize(function(){
    //    $(".ks_panel").find(".ks_open").each(function(){  //自动遍历模块是否需要添加 + 按钮
    //        if ($(this).parent().find(".ks_body").outerHeight(true) > $(this).parent().height() - $(this).parent().find(".ks_title").outerHeight(true)) {
    //            $(this).css({
    //                "background": "url(../pages/assets/img//main/open.png) no-repeat",
    //                "display": "block"
    //            });
    //        }else{
    //            $(this).css({
    //                "display": "none"
    //            });
    //        }
    //    });
    //});

    
    //  $(document).on("click",".ks_open",function () {   //点击 + 按钮下拉显示所有内容
    //     var width  = $(window).width()/1.5;
    //     var height  = $(window).height()/1.5;
    //     $.ajax({
    //         "type":"get",
    //         "url" : "layer_module.html",
    //         "success" : function(response,status,xhr){
    //             layer.open({
    //                 type: 1,
    //                 title: "模块",
    //                 skin: "layui-layer-lbf", //添加类名
    //                 closeBtn: 1,
    //                 area: [width + "px", height + "px"],
    //                 shadeClose: true,
    //                 content: response
    //             });
    //         }
    //     });
    // });

});

