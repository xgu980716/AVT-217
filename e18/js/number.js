$(document).ready(function() {
    var number = Math.floor(Math.random() * 1000);
  	console.log(number);
    $('#line').css('width', number);
  	var guesses = '';
  	$('#submit').click(function() {
  	 	var guess = $('input').val();
  	 	guesses += guess + ' ';
  	 	$('.guesses p').text(guesses);
  		console.log(guess);
  		if (number == guess) {
  			$('h1').text(number + ' is right!');
  			$('input').val('');
        $('.button p').text('Play Again?');
  			$('#submit').click(function() {
  				location.reload(true);
  			});
  		} else if (number < guess) {
  			$('h1').text(guess + ' is too high');
  			$('input').val('')
  		} else {
  			$('h1').text(guess + ' is too low');
  			$('input').val('');
  		}
  	});
    $(document).keypress(function(e){
        if(e.which == 13){ //Enter key pressed
            $('#submit').click();//Trigger button click event
        }
    });
});
