/**
 * Created by 李木子 on 2017/10/12.
 */
requirejs .config ({
    paths:{
        jquery:'jquery-1.12.4'
    }});
define(["jquery"],function ($) {

        return{
            open:function (setting) {
                var defaultSettigs ={
                    width:500,
                     height:400,
                    title:"弹出层",
                    content:""
                };
                $.extend (defaultSettigs,setting);
                var html= '<div class="dialog-container">'
                   +'<div class="dialog-mask"></div>'
                    +'<div class="dialog-main">'
                    +'<div class="dialog-title">'
                    +'<div class="dialog-title-close">[X]</div>'
                    +'</div>'
                    +'<div class="dialog-content"></div>'
                    +'</div>'
                    +'</div>';
                $("body").append(html);
                $(".dialog-main").css({
                   width:defaultSettigs.width,
                   height:defaultSettigs.height,
                    marginTop:-defaultSettigs.height /2,
                    marginLeft:-defaultSettigs.width /2
                });
                $(".dialog-content").html(defaultSettigs.content);
                $(".dialog-title-close").on("click",function (){
                    $(this).parents(".dialog-container").remove() ;
                })
            }

        };
});

















