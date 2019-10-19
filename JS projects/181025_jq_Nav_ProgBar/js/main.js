
$(document).ready(function() {


  var executed = false;
  $ws = $(window).scrollTop();

  $(window).scroll(function() {

    // btn up show when scroll
    $ws = $(window).scrollTop();
    if ($ws > 500) {
      $("#btnUp").fadeIn(500);
    } else {
      $("#btnUp").fadeOut(500);
    }

    // progress bar statement
    checkProgBar();

    // change  navbar when scroll
    changeNavbar();
  });
    // navbar function
  function changeNavbar() {
    if ($(window).scrollTop() > 200) {
      $("nav").css("height", "70px");
      $("nav").css("backgroundColor", "rgba(226, 42, 42, 0.883)");
    } else {
      $("nav").css("height", "100px");
      $("nav").css("backgroundColor", "#333");
    }
  }
  changeNavbar();
  // progress bar function
  function checkProgBar() {
    if ($ws > 1800 && executed == false) {
      executed = true;
      var width = 0;
      var myInter;
      myInter = setInterval(add, 100);
      function add() {
        if (width < 70) {
          width++;
          percent.innerText = width + "%";
          innerBar.style.width = width + "%";
        } else {
          clearInterval(myInter);
        }
      }
    }
  }

  // scroll up button click event
  $("#btnUp").click(function() {
    $("html").animate({ scrollTop: 0 });
  });



  
});

