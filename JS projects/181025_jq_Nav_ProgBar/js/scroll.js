// scroll when click link

// $("nav a").click(function() {
//   if ($(this).attr("title") != "") {
//     $hrefAttr = $(this).attr("title");
//     $scrollPos = $($hrefAttr).offset().top;
//     $("html").animate({ scrollTop: $scrollPos });
//   }
// });

$("#linkAbout").click(function() {
  $("html").animate({ scrollTop: $("#about").offset().top });
});
$("#linkHome").click(function() {
  $("html").animate({ scrollTop: $("#home").offset().top });
});
$("#linkContact").click(function() {
  $("html").animate({ scrollTop: $("#contact").offset().top });
});
$("#linkProgress").click(function() {
    $("html").animate({ scrollTop: $("#progress").offset().top });
  });
linkProgress