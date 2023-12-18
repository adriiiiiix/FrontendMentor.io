$(".question").click(function(){ 
        //console.log("click click!");
        $(this).toggleClass("question-active");
        $(this).next().slideToggle(700);
        $(this).children("img.arrow").toggleClass("arrow-active");
    });