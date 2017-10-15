/**
 * Created by 李木子 on 2017/10/3.
 */

var mask= document.getElementById ("mask-wide");
var body = document .getElementById ("body-wide");
mask.onclick=function () {
    mask.style.display ="none";
    body.style.display = "block";

};

//导航
$("#bb").on("click",function () {
    $("html,body").animate({scrollTop:$("#cloud").offset().top},100);
});
$("#cc").on("click",function () {
    $("html,body").animate({scrollTop:$("#intro").offset().top},100);
});
$("#dd").on("click",function () {
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
    msg: function(msg){
        return msg;
    },
    len: function(){
        return this.msg.length;
    },
    seq: 0,
    speed: 150,//打字时间(ms)
    type: function(){
        var _this = this;
        document.getElementById("text").innerHTML = _this.msg.substring(0, _this.seq);
        if (_this.seq == _this.len()) {
            _this.seq = 0;
            clearTimeout(t);
        }
        else {
            _this.seq++;
            var t = setTimeout(function(){_this.type()}, this.speed);
        }
    }
};
window.onload = function(){
    var msg = "Hey,<br>Welcome to my world!<br>This is my website.<br>这是一颗星球叫M902 ♥";
    function getMsg(){
        return msg;
    }
    typeWriter.msg = getMsg(msg);
    typeWriter.type();
};


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
}

