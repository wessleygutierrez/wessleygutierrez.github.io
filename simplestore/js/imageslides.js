var i = 0;
var images = [];
var time = 5000;

//Image list
images[0] = "images/1.jpg";
images[1] = "images/2.png";
images[2] = "images/3.jpg";
//Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;