$(document).ready(function(){
    var appendDocument = function(){
        for(var i=0; i<20; i++){
            $('.box.mt30').appendTo('.content');
        };
    };
    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop() + $(window).height();
        var documentHeight = $(document).height();
        
        if(scrollHeight >= documentHeight){
            appendDocument();
        };
    });
});