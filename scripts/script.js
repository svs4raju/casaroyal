// responsive show-bar

var navtoggle = document.querySelector(".nav-toggle");
var nav = document.querySelector(".nav");
var body = document.getElementsByTagName("html")[0];

navtoggle.addEventListener("click", function() {
  nav.classList.toggle("nav-responsive");
  navtoggle.classList.toggle("trans-nav-toggle");
  body.classList.toggle("window-scroll");
});



// drop header
$(document).scroll(function() {
  //  var x = $('.userslist');
  var sticky = $("header");
  var logo = $(".header__logo");
  scroll = $(document).scrollTop();
  if (scroll >= 550 && $("header").hasClass("stickyheader") != true) {
    sticky.addClass("stickyheader");
    logo.addClass("pop");
  } else if (scroll <= 500) {
    sticky.removeClass("stickyheader");
    logo.removeClass("pop");
  }
});



//   nav hover effect
var navchild = document.querySelectorAll(".nav__list > a");
var navchildactive = document.getElementsByClassName("active");
var hoverbar = document.getElementsByClassName("hover-bar")[0];

for (var i = 0; i < navchild.length; i++) {
  navchild[i].addEventListener("mouseover", function(event) {
    //   console.log(event.target.offsetLeft);
    var childlength = event.target.offsetLeft;
    var childwidth = event.target.offsetWidth;
    hoverbar.style.left = childlength + childwidth / 2 - 10 + "px";
  });
  navchild[i].addEventListener("mouseout", function(event) {
    var childactivelength = navchildactive[0].offsetLeft;
    var childactivewidth = navchildactive[0].offsetWidth;
    hoverbar.style.left = childactivelength + childactivewidth / 2 - 10 + "px";
  });
}



//carousel

var slide = document.getElementsByClassName("testimonials__list-item");
var count = 0;

//slide forward

function slideForward() {
  if (count >= slide.length) {
    count = 0;
  }
}
function nextslide() {
  count++;
  $(slide).removeClass("active-cover");
  slideForward();
  $(slide[count]).addClass("active-cover");
}

//slide back

function slideback() {
  if (count < 0) {
    count = slide.length - 1;
  }
}

function prevslide() {
  count--;
  $(slide).removeClass("active-cover");
  slideback();
  $(slide[count]).addClass("active-cover");
}

//play-button

// var vid = document.querySelector('.deals__list__video > .video')
// var palypause = document.querySelector('.icon-play');

// playpause.addEventListener('click',function(){
//   if (vid.paused == true) {
//       video.play();
//     }
//     else {
//       vid.pause();
//     }
  
// });

//remove landscape

$(window).resize(function() {
  if ($(window).width() < 1280) {
    $(".landscape").removeClass("landscape-show");
  } else {
    $(".landscape").addClass("landscape-show");
  }
});


