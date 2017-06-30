/**
 * Created by SSXT034 on 2017/4/13.
 */

//浏览器嗅探器
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++)    {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {  string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Internet Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {      // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
BrowserDetect.init();


//获取get参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

//去除数组中重复的元素
function filterArray(args){
    var filterarr = [];
    for(i=0;i<args.length;i++){
        if(filterarr.indexOf(args[i])<0){
            filterarr.push(args[i])
        }
    }
    return filterarr;
}

function component_loading(element,methods){

    $.ajax({
        "type":"get",
        "url" : "component_loading.html",
        "async" : false, //是否开启异步
        "success" : function(response,status,xhr){
            $(function(){
                if(methods == "append"){
                    $(element).append(response);
                }else if(methods == "prepend"){
                    $(element).prepend(response);
                }else if(methods == "before"){
                    $(element).before(response);
                }else if(methods == "after"){
                    $(element).after(response);
                }
            });
        },
        "error":function(xhr,errorText,errorStatus){  //访问错误后的回调函数  第一个参数对象 第二个错误的文本 第三个错误的类型
            alert("ajax访问错误:" + xhr.status + " " +xhr.statusText);        //错误的编号 和文本
        }
    });
}

function component_tabnews(element,methods){

    $.ajax({
        "type":"get",
        "url" : "component_tabnews.html",
        "async" : false, //是否开启异步
        "success" : function(response,status,xhr){
            $(function(){
                if(methods == "append"){
                    $(element).append(response);
                }else if(methods == "prepend"){
                    $(element).prepend(response);
                }else if(methods == "before"){
                    $(element).before(response);
                }else if(methods == "after"){
                    $(element).after(response);
                }
            });
        },
        "error":function(xhr,errorText,errorStatus){  //访问错误后的回调函数  第一个参数对象 第二个错误的文本 第三个错误的类型
            alert("ajax访问错误:" + xhr.status + " " +xhr.statusText);        //错误的编号 和文本
        }
    });
}

function component_head(element,methods) {
    $.ajax({
        "type": "get",
        "url": "component_head.html",
        "async": false, //是否开启异步
        "success" : function(response,status,xhr){
            $(function(){
                if(methods == "append"){
                    $(element).append(response);
                }else if(methods == "prepend"){
                    $(element).prepend(response);
                }else if(methods == "before"){
                    $(element).before(response);
                }else if(methods == "after"){
                    $(element).after(response);
                }
            });
        },
        "error": function (xhr, errorText, errorStatus) {  //访问错误后的回调函数  第一个参数对象 第二个错误的文本 第三个错误的类型
            alert("ajax访问错误:" + xhr.status + " " + xhr.statusText);        //错误的编号 和文本
        }
    });
}

function component_sidebar(element,methods) {
    $.ajax({
        "type": "get",
        "url": "component_sidebar.html",
        "async": false, //是否开启异步
        "success" : function(response,status,xhr){
            $(function(){
                if(methods == "append"){
                    $(element).append(response);
                }else if(methods == "prepend"){
                    $(element).prepend(response);
                }else if(methods == "before"){
                    $(element).before(response);
                }else if(methods == "after"){
                    $(element).after(response);
                }
            });
        },
        "error": function (xhr, errorText, errorStatus) {  //访问错误后的回调函数  第一个参数对象 第二个错误的文本 第三个错误的类型
            alert("ajax访问错误:" + xhr.status + " " + xhr.statusText);        //错误的编号 和文本
        }
    });
}
