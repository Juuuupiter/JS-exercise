/**
 * Created by 李木子 on 2017/10/3.
 */

//封面
var open= document.getElementById ("cover-open");
var cover = document .getElementById ("particles-js");
var body = document .getElementById ("body-wide");
open.onclick = function () {
    open.style.display ="none";
    cover.style.display = "none";
    body.style.display = "block";

};

//导航
$("#bb").on("click",function () {
    $("html,body").animate({scrollTop:$("#cloud").offset().top},100);
});
$("#cc").on("click",function () {
    $("html,body").animate({scrollTop:$("#what-to-do").offset().top},100);
});
$("#dd").on("click",function () {
    $("html,body").animate({scrollTop:$("#intro").offset().top},100);
});
$("#ee").on("click",function () {
    $("html,body").animate({scrollTop:$("#contact").offset().top},100);
});
$("#call-me").on("click",function () {
    $("html,body").animate({scrollTop:$("#contact").offset().top},100);
});


//模拟打字
//         $("#letter-up")
//         .typetype(
//             'Hey,',
//             {
//               e:0,
//               t:100
//             })
//
//          $("#letter-middle ")
//              .delay(1000)
//              .typetype('Welcome to my world!',
//             {
//                 e:0,
//                 t:100
//             });
//
//          $("#letter-down")
//              .delay(4000)
//              .typetype("This is my website.",
//             {
//                 e:0,
//                 t:100
//             })
//         .backspace(60)
//          $("#letter-middle ")
//              .delay(5000)
//              .backspace(60);
//
//          $("#letter-down")
//              .delay(500)
//               .typetype('这是一颗星球叫M902 ♥',
//             {
//                 e:0,
//                 t:100
//             });

    var typeWriter = {
        msg: function (msg) {
            return msg;
        },
        len: function () {
            return this.msg.length;
        },
        seq: 0,
        speed: 150,//打字时间(ms)
        type: function () {
            var _this = this;
            document.getElementById("text").innerHTML = _this.msg.substring(0, _this.seq);
            if (_this.seq == _this.len()) {
                _this.seq = 0;
                clearTimeout(t);
            }
            else {
                _this.seq++;
                var t = setTimeout(function () {
                    _this.type()
                }, this.speed);
            }
        }
    };
    window.onload = function () {
        var msg = "Hey,<br>Welcome to my world!<br>This is my website.<br>这是一颗星球叫M902 ♥";

        function getMsg() {
            return msg;
        }
        typeWriter.msg = getMsg(msg);
        typeWriter.type();
    };

//弹出层

var btn = document.getElementById('open');
var mask = document.getElementById('dialog-mask');
var dialog = document.getElementById('dialog-main');
var close = document .getElementById ('dialog-title-close');
btn.onclick = function () {
    mask.style.display = 'block';
    dialog.style.display = 'block';
};
mask.onclick = function () {
    mask.style.display = 'none';
    dialog.style.display = 'none';
};
close .onclick = function (){
    mask.style.display = 'none';
    dialog.style.display = 'none';
}


//轮播图
var oContainer = document.getElementById("container");
var oNav = document.getElementById("list-nav");
var aLi = oNav.getElementsByTagName("li");
var oImgs = document.getElementById("imgs");
var aImg = oImgs.getElementsByTagName("img");
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var nowIndex = 0;//全局变量，保存当前显示的图片的索引
var timer;
for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;//给每个li对象自定义属性，保存住当时的i的值
    /*
     相当于：
     aLi[0].index = 0;
     aLi[1].index = 1;
     aLi[2].index = 2;
     aLi[3].index = 3;*/
    aLi[i].onmouseover = function(){
        nowIndex = this.index;
        changeImg();
    };
}

oPrev.onclick = oNext.onclick = function(){
    if(this === oPrev){
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = aLi.length - 1;//3
        }
    }else{
        nowIndex++;
        if(nowIndex == aLi.length){
            nowIndex = 0;
        }
    }
    changeImg();
};

oPrev.onselectstart = oNext.onselectstart = function(){
    return false;
};

oContainer.onmouseover = function(){
    clearInterval(timer);
};
oContainer.onmouseout = function(){
    play();
};

play();

function play(){
    timer = setInterval(function(){
        oNext.onclick();
    }, 1000);
}

function changeImg(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className = "";
        aImg[i].className = "";
    }
    aLi[nowIndex].className = "selected";
    aImg[nowIndex].className = "selected";
}


//回到顶部
var goTop = document .getElementById ('goTop');
goTop.onclick = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = setInterval (function () {
        window .scrollTo (0,scrollTop -= 10);
        if (scrollTop <=0){
            clearInterval (timer);
        }
    },10);
};

//进度条
function circle(percent,c){
    var process = 0 ;
    var ctx = c.getContext('2d');
    //外面的圆
    ctx.beginPath();
    ctx.arc(150, 150, 85, 0, Math.PI*2);
    ctx.closePath();
    ctx.fillStyle = '#9cc';
    ctx.fill();


    function drawCricle(ctx, percent){
        // 画进度环
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 80, Math.PI * 2, Math.PI * (2 + 2* percent / 100 ));
        ctx.closePath();
        ctx.fillStyle = '#369';
        ctx.fill();
        // 画内填充圆
        ctx.beginPath();
        ctx.arc(150, 150, 75, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.fill();
        // 填充文字
        ctx.font = "bold 20pt Microsoft YaHei";
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.moveTo(150, 150);
        ctx.fillText(process + '%', 150, 150);
    }

    function animate(){
        requestAnimationFrame(function (){
            process = process + 1;
            drawCricle(ctx, process);
            if (process < percent) {
                animate();
            }
        });
    }

    $(function play() {
        $("#what-to-do").on("mouseover",function() {
            animate();
            $(this).unbind();
        });
    });
}


var fn1 = circle(66,document.getElementById('one'));
fn1;

var fn2 = circle(88,document.getElementById('two'));
fn2;

var fn3 = new circle(72,document.getElementById('three'));
fn3;

var fn4 = new circle(90,document.getElementById('four'));
fn4;



