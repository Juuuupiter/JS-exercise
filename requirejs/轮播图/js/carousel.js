requirejs.config ({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(["jquery"],function ($){
    function Carousel(setting){
        this.$container=$('<div class="carousel-container"></div>');
        this.$number=$('<div class="carousel-number"></div>');
        this.$pic=$('<div class="carousel-pic"></div>');
        this.$leri=$('<div class="carousel-leri"></div>');
        this.$le=$('<div class="carousel-le">&lt</div>');
        this.$ri=$('<div class="carousel-ri">&gt</div>');
        this.defaultSettings={
            selector:"document.body",
            picArr:[],
            speed:1000,
            buttonStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings ,setting)
    }
    Carousel.prototype.init=function (){
        this.$container.append(this.$number).append(this.$pic).append(this.$leri);
        this.$leri.append(this.$le).append(this.$ri);
        for(var i=0;i<this.defaultSettings.picArr.length;i++){
            var $li= $("<li></li>").html(i+1);
            this.$number.append($li);
            var $img= $("<img />").attr("src",this.defaultSettings.picArr[i]);
            this.$pic.append($img);

        }
        if(this.defaultSettings.buttonStyle=="circle"){
            $("li",this.$number).html("").css({
                borderRadius:"50%"
            })
        }

        this.$le.addClass(this.defaultSettings.arrowPos);
        this.$ri.addClass(this.defaultSettings.arrowPos);

        $("img",this.$pic).eq(0).addClass("selected");
        $("li",this.$number).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);

        var nowIndex=0;
        $("li",this.$number).on("mouseover",function (e){
            nowIndex =$(e.target).index();
             changImg.call(this);
        }.bind(this));
        this.$le.on("click",function () {
            nowIndex --;
            if(nowIndex==-1){
            nowIndex =this.defaultSettings.picArr.length-1
            }
            changImg.call (this);
        }.bind(this ));
        this.$ri.on("click",function () {
            nowIndex ++;
            if(nowIndex ==this.defaultSettings.picArr.length){
                nowIndex=0;
            }
            changImg.call(this);
        }.bind(this));



        var timer
        this.$container.hover(function () {
            clearInterval(timer);
        },function () {
           play.call(this);
        }.bind(this));

        play.call(this);

     function changImg(){
         $("li",this.$number).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
         $("img",this.$pic).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
     }
      function play() {
          timer=setInterval(function() {
              this.$ri.trigger("click");
          }.bind(this),this.defaultSettings.speed);
      }



    };






    return Carousel ;
});