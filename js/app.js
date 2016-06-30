
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Generate Random Number for user to guess---*/
  	var random = function(min, max) {
		return Math.random() * (max - min) + min
	}

  	/*---New game---*/
  	$('.new').click(function() {
  		document.reset();
  		random(1,101)
  	})

  	/*---Random number into a variable---*/
	var guessNum = random(1,101);

	/*---Difference between user and random numbers---*/
	var diff = Math.abs(userGuess - guessNum);

	var guess = function() {
		var userGuess = $('#userGuess').val(); 
		var html = '<li>' + userGuess + '</li>'
		
		if (diff == 0) {
			$('#feedback').html('You got it!') 	
		}

		else if (diff >= 51) {
			$('#guessList').append(html)
			$('#feedback').html('Ice Cold!')
		}

		else if (diff >= 31 && diff <= 50) {
			$('#guessList').append(html)
			$('#feedback').html('Cold')
		}

		else if (diff >= 16 && diff <= 30) {
			$('#guessList').append(html)
			$('#feedback').html('Warm')
		}

		else if (diff >= 6 && diff <= 15) {
			$('#guessList').append(html)
			$('#feedback').html('Hot')
		}

		else if (diff >= 1 && diff <= 5) {
			$('#guessList').append(html)
			$('#feedback').html('Very Hot!')
		}

		else () {
			$('#feedback').html('Guess with numbers please!')
		}
	}

});


//choose random number
//user guesses a number
//divide and conquer
//new game function - new random number - new game witout refreshing/reloading

//