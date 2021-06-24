window.addEventListener("load", function() {
    setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var timeofDay = "AM";
    var zero = "0";
    var zero1 = "0";
    var zero2 = "0";
    decision = "clock";
    if(date.getHours() > 12){
        hours = hours - 12;
    }
    if(date.getHours() > 11){
        timeofDay = "PM";
    }
    if(date.getHours() > 9){
        if(date.getHours() < 13){
            zero2 = "";
        }
    }
    if(date.getHours() > 21){
        zero2 = "";
    }
    if(date.getHours() == 0){
        hours = 12;
        zero2 = "";
    }
    if(date.getMinutes() > 9){
        zero1 = "";
    }
    if(date.getSeconds() > 9){
        zero = "";
    }
    document.getElementById("clockstop").innerHTML =  zero2 + hours + ':' + zero1 + date.getMinutes() + ':' + zero + date.getSeconds() + ' ' + timeofDay;
}, 1000);
});