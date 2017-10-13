/**
 * Created by 李木子 on 2017/10/13.
 */
//弹出层
requirejs.config ({
    paths:{
        jquery:'jquery-1.12.4'
    }});
require (["jquery","dialog"],function ($,dialog) {
    $("#open").on("click",function () {
        var setting = {
            width:1100,
            height:600,
            title:"denglu",
            content:"nihao"
        } ;
        dialog .open (setting);
    })
});