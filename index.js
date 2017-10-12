/**
 * Created by 李木子 on 2017/10/12.
 */
requirejs .config ({
       paths:{
              jquery:'jquery-1.12.4'
       }});
require (["jquery","dialog"],function ($,dialog) {
       $("#open").on("click",function () {
              var setting = {
                 width:400,
                  height:300,
                  title:"denglu",
                  content:"nihao"
              } ;
              dialog .open (setting);
       })
});

