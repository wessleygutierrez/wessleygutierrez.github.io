//navbar underline animation trigger
function underlineEx(x) {
	x.classList.add("change");
}
function underline(x) {
	x.classList.remove("change");
}
//fade-in website
setTimeout(function(){ document.body.className -= ' fade-out'; }, 1);

//width restrictions
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 900px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

var mp;
// media query change
function WidthChange(mq) {
  mp = mq;
  if (mq.matches) {
    // window width is at least 500px
      $('.whitespace').show();
      $('#topnav').show();
      $('.mobile-nav').hide();
  } else {
    // window width is less than 500px
      $('.whitespace').hide();
      $('#topnav').hide();
      $('.mobile-nav').show();
  }
  
}

// Sticky navbar function
window.onscroll = function() {
  if(mp.matches){
  myFunction()
  }
};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

jQuery(function($){
  $( '#buttonNav' ).click(function(){
    $('#menu').slideToggle();
  })
})


