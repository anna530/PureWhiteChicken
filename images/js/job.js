$('#job_bun').click(function(){
    var dY =$('.majob__bun').offset().top;
    $('html').stop(true, false).animate({scrollTop: dY}, 900);
});