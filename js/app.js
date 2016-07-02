
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
  		var myNum = Math.random() * (max - min) + min
		myNum = parseInt(myNum)
		return myNum
	}


  	/*---New game---*/
  	var newGame = function() {
  		$('#guessForm').show() 
  		document.getElementById('guessForm').reset();
  		$('#feedback').html('Make your Guess!')		
  		$('#guessList').html('');
  		numRandom = random(1,101);
  		numGuesses = 0
  		$('#count').html(numGuesses);
  	}

  	$('.new').click(function() {
  		newGame();
  	})

  	/*---Random number into a variable---*/
	

	var numGuess, diff, numRandom,numGuesses,lastNumGuess
		newGame();

	$('form').submit(function(e) { 
		/*---stops page from refreshing---*/
		e.preventDefault();
		

		/*---User guess into variable---*/
		numGuess = $('#userGuess').val();
		numGuess = parseFloat(numGuess);

		if (isNaN(numGuess) || numGuess % 1 != 0) {
			alert('Please only enter numbers from 1 to 100')
			return
		} 
		numGuesses++;
		$('#count').html(numGuesses);
		document.getElementById('guessForm').reset();
		/*---Difference between user and random numbers---*/
		diff = Math.abs(numGuess - numRandom);
		diff = parseInt(diff);

		diffLast = Math.abs(numGuess - lastNumGuess);
		diffLast = parseInt(diffLast);

		lastNumGuess = numGuess;

		var html = '<li>' + numGuess + '</li>'
		
		if (diff >= 0 && diff < 1) {
			$('#feedback').html('You got it!')
			$('#guessForm').hide() 	
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
		
	
	});

});


//choose random number
//user guesses a number
//divide and conquer
//new game function - new random number - new game witout refreshing/reloading

//