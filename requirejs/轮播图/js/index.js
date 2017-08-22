requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require (["jquery","carousel"],function ($,Carousel) {
    var setting1={
     selector:"#container1",
     picArr:["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
     speed:1000,
     buttonStyle:"square",
     arrowPos:"bottom"
    };
    var carousel=new Carousel(setting1);
    carousel.init();

    var setting2={
        selector:"#container2",
        picArr:["img/2.jpg","img/3.jpg","img/4.jpg"],
        speed:500,
        buttonStyle:"circle",
        arrowPos:"center"
    };
    var carouse2=new Carousel(setting2);
    carouse2.init();
});