// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    
    // target id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    e.preventDefault();
    var pos=0;

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 900px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    function WidthChange(mq) {
        mp = mq;
    }
    
    // top position relative to the document minus the nav
    if(mp.matches){
        if(!$("#topnav").hasClass("sticky")){
            pos = ($id.offset().top - 115);
        }
        else{
            pos = ($id.offset().top - 80);
        }
    }
    else{
        pos = $id.offset().top;
    }
    // animated top scrolling at 1
    $('body, html').animate({scrollTop: pos});
    // setTimeout(function(){$('body, html').animate({scrollTop: pos}, 10)}, 2000);
});