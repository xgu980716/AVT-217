$(document).ready(function(){
  console.log('The document is ready! Do something awesome!');

  $('.title').click(function(){
    $('.no1').toggleClass('no11');
    $('.no12').toggleClass('no123');
  });


  $("#hide").click(function(){
    $(".no2").hide();
  });
  $("#show").click(function(){
    $(".no2").show();
  });

  $('.no31').mouseover(function(){
    $('.no32').toggleClass('no33');
    $('.no31 h1').css('font-size', '2em');
  });
  $('.no31').mouseout(function(){
    $('.no31 h1').css('font-size', '4em');
    $('.no32').toggleClass('no33');
  });
});




// // everything must go in the document ready function
// $( document ).ready(function() {
//
//   // prints to the console which we can see through the inspector
//   console.log( 'ready!' );
//
//   // allows us to make an interaction on click
//   $('p').click(function() {
//
//     // grows the font size coded through jquery
//     $('p').css('font-size','10vw');
//
//     // toggles a class we made in css. one click adds it, the next click removes it
//     $('p').toggleClass('grow');
//
//   });
//
//   // grows the font size when jquery loads
//   // $('p').css('font-size','10vw');
//
// });
// © 2019 GitHub, Inc.
