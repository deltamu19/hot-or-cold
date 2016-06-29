
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var random = function(min, max) {
		return Math.random() * (max - min) + min
	}

	var guessNum = random(1,101);

	var guess = function() {
		var userGuess = $('#userGuess').val(); 
		var html = '<li>' + userGuess + '</li>'
		if (userGuess == guessNum) {
			return 
			
		}
		else if (userGuess > guessNum) {
			$('#guessList').append(html)
			$('#feedback').html('Too high')
		}
		else if (userGuess < guessNum) {
			$('#guessList').append(html)
			$('#feedback').html('Too low')
		}
		else () {
			$('#feedback').html('Too high')
		}
	}

});


//choose random number
//user guesses a number
//divide and conquer
