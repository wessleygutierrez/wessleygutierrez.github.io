$(function(){
    $('#front').click(function(){
        // $('#front').slideToggle(2000);
        // $('#front').slideToggle(2000);
        $('#front').animate({width:'toggle'},1000);
        $('#inside').animate({width:'toggle'},1500);
        // $('body').append('<div id="inside">' + '</div>');
        // $('#inside').animate({width:'toggle'},1000);
    });
    $('#inside').click(function(){
        // $('#front').slideToggle(2000);
        // $('#front').slideToggle(2000);
        $('#inside').animate({width:'toggle'},1500);
        $('#front').animate({width:'toggle'},1500);
        // $('body').append('<div id="inside">' + '</div>');
        // $('#inside').animate({width:'toggle'},1000);
    });
});
