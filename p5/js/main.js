$(document).ready(function() {
  console.log('start');

  $('body').click(function(){
    
    $('.lfg').animate({opacity:'1'}, 100,function(){
        console.log('lffdone');
      $('.color').fadeTo(1000, 0.2);
      // $('.image').fadeTo(1000, 0.5);
      $('#h1').css('opacity', '1');
    });

    $('.lsg').animate({opacity:'1'}, 100,function(){
        console.log('lsfdone');
      $('.color').fadeTo(1000, 0.4);
      // $('.image').fadeTo(1000, 1);
      $('#h2').css('opacity', '1');
    });

    $('.ltg').animate({opacity:'1'}, 100,function(){
        console.log('ltfdone');
      $('.color').fadeTo(1000, 0.6);
      $('#h3').css('opacity', '1');
    });

    $('.rfg').animate({opacity:'1'}, 100,function(){
        console.log('rffdone');
      $('.color').fadeTo(1000, 0.8);
      $('#h4').css('opacity', '1');
    });

    $('.rsg').animate({opacity:'1'}, 100,function(){
        console.log('rsfdone');
      $('.color').fadeTo(1000, 1);
      $('#h5').css('opacity', '1');
    });

    $('.rtg').animate({opacity:'1'}, 100,function(){
        console.log('rtfdone');
      // $('.color').fadeTo(1000, 0.2);
      $('#h6').css('opacity', '1');
      $('.color').click(function(){
        location.reload(true)
      });
    });

  });
});
