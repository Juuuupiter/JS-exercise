/**
 * Created by 李木子 on 2017/10/13.
 */
//弹出层
requirejs.config ({
    paths:{
        jquery:'jquery-1.12.4'
    }});
require (["jquery","./dialog"],function ($, dialog) {
    $("#open").on("click",function () {
        var setting = {
            width:1100,
            height:600,
            content:"<p>soory啦 ， 还不知道写什么啊<br>" +
            "狐狸说：“我的生活很单调。我追逐鸡，人追逐我。所有的鸡都一个模样。<br>" +
            "所有的人也是。所以，我感到有点无聊。<br>" +
            "但是，如果你驯养了我，我的生活将充满阳光。我将辨别出一种与众不同的脚步声。<br>" +
            "别的脚步声会让我钻入地下。而你的脚步声却会像音乐一样，把我从洞穴里召唤出来。<br>" +
            "另外你瞧，看到那边的麦田了么？我不吃面包，小麦对我来说毫无用处。<br>" +
            "麦田也不会让我联想到任何事。这是很可悲的！但是你长着金黄色头发。<br>" +
            "当你驯养我以后，这将是非常美妙的一件事！麦子的颜色也是金黄色的，<br>" +
            "它会让我想起你。而且我也将喜欢聆听风儿吹过麦田的声音……”——《小王子》</p>"
        } ;
        dialog .open (setting);
    })
});