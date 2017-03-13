//Array of question objects
var triviaBank = 
[
//***Q1***
	{
		questionText: 'Perhaps best known for their stylized arrows and vibrant color esthetic, this studio continues to be praised for their work on the 1995 video game \"Wipeout.\"',

		questionImage: 'assets/images/q-tdr.jpg',

		answers: 
		[ 
			{
				text: 'Experimental Jetset',

				correct: false
			},

			{
				text: 'The Designers Republic',

				correct: true
			},

			{
				text: 'MNML',

				correct: false
			},

			{
				text: 'Pentagram',

				correct: false
			}
		],

		correctAnswer: 'The Designers Republic',

		response: 'The Designers Republic was founded in 1986 by Ian Anderson, a self-taught designer who got his start by creating flyers for electronic music shows that he organized. The studio dissolved in 2009.',

		answerImage: 'assets/images/a-tdr.jpg'
	},

//***Q2***
	{
		questionText: 'A prolific British graphic designer and author of “The Art of Looking Sideways,” he designed this logo for the Victoria & Albert museum in 1990, which is still in use today.',

		questionImage: 'assets/images/q-af.jpg',

		answers: 
		[ 
			{
				text: 'Massimo Vignelli',

				correct: false
			},

			{
				text: 'Paul Rand',

				correct: false
			},

			{
				text: 'Saul Bass',

				correct: false
			},

			{
				text: 'Alan Fletcher',

				correct: true
			}
		],

		correctAnswer: 'Alan Fletcher',

		response: 'Alan Fletcher is recognized as one of the most influential figures in post-war British design. His book \"The Art of Looking Sideways\" is over one-thousand pages in length and is meant to be opened at random.',

		answerImage: 'assets/images/a-af.jpg'
	},

//***Q3***
	{
		questionText: 'Music is where this designer got his start. He is credited for iconic record covers he produced as the director of Factory Records, including those for Joy Division and New Order.',

		questionImage: 'assets/images/q-ps.jpg',

		answers: 
		[ 
			{
				text: 'Chip Kidd',

				correct: false
			},

			{
				text: 'Stefan Sagmeister',

				correct: false
			},

			{
				text: 'Peter Saville',

				correct: true
			},

			{
				text: 'Milton Glaser',

				correct: false
			}
		],

		correctAnswer: 'Peter Saville',

		response: 'Peter Saville has multiple covers included in the permanent collection of New York\'s Museum of Modern Art. The color blocks included on New Order\'s Power Corruption and Lies were selected using an elaborate color-based code that spells the band\'s name and album title.',

		answerImage: 'assets/images/a-ps.jpg'
	},

//***Q4***
	{
		questionText: 'Famous for purportedly creating Citi Bank’s logo on the back of a napkin in a matter of seconds, this designer is also a notable painter of city maps.',

		questionImage: 'assets/images/q-psc.jpg',

		answers: 
		[ 
			{
				text: 'Paula Scher',

				correct: true
			},

			{
				text: 'Michael Bierut',

				correct: false
			},

			{
				text: 'Bruce Mau',

				correct: false
			},

			{
				text: 'Jessica Walsh',

				correct: false
			}
		],

		correctAnswer: 'Paula Scher',

		response: 'Paula Scher has also created some of the most recognizable logotypes including work for the Museum of Modern Art and Microsoft.',

		answerImage: 'assets/images/a-psc.jpg'
	},

//***Q5***
	{
		questionText: 'A professional surfer prior to entering graphic design, his work for Ray Gun magazine is credited for popularizing his iconic grunge typography.',

		questionImage: 'assets/images/q-dc.jpg',

		answers: 
		[ 
			{
				text: 'Susan Kare',

				correct: false
			},

			{
				text: 'David Carson',

				correct: true
			},

			{
				text: 'April Greiman',

				correct: false
			},

			{
				text: 'John Maeda',

				correct: false
			}
		],

		correctAnswer: 'David Carson',

		response: 'David Carson was the 9th best surfer in America at his peak. After his work as art director of Transworld Skateboarding, he was hired by Ray Gun in 1992 and founded his own studio in 1995.',

		answerImage: 'assets/images/a-dc.jpg'
	}
];

// Setting variables
var questionNum = 0;

var currentQuestion = triviaBank[0];

function questionNumMath() {
	questionNum++;
	currentQuestion = triviaBank[questionNum];
};

var timer;

var match = false;

var questionTimer;

var correctGuess = 0;

var wrongGuess = 0;

// Display questions and answers
function printQuestion() {
	$('.wrapper').hide().fadeIn(1000);

	$('.answer-image, .triviaBox, .correct-answer').empty();

	// Printing current question and image
	$('.question').text(currentQuestion.questionText)

	$('.question-image').html('<img src="' + currentQuestion.questionImage + '">')

	// // Looping to include all potiential answers
	for (i=0; i<currentQuestion.answers.length; i++) {
		var newDiv = $('<div>');
		
		newDiv.text(currentQuestion.answers[i].text)
		.appendTo('.triviaBox')
		.addClass('answers')
		.attr('data-correct', currentQuestion.answers[i].correct);
	};

	//30 sec timer to guess.
	timer = 30;

	$('.timer').text(timer);

	questionTimer = setInterval(function() {
		timer--;
		$('.timer').text(timer);

		if (timer === 0) {
		evaluate();
		};

	}, 1000);

	match = false;

	guess();
};

// Click event for user response.
function guess() {
	$('.answers').on('click', function() {
		if ($(this).data('correct') === true) {
			match = true;

		} else {
			match = false;
		};

		evaluate();
	});
}

//Compares user guess or timeout to match condition.
function evaluate() {
	$('.wrapper').fadeOut(1000, function() {
		$('.wrapper').fadeIn(1000)

		clearInterval(questionTimer);
		$('.timer, .triviaBox, .question, .question-image').empty();

		$('.answers').off('click');

		$('.correct-answer').text(currentQuestion.correctAnswer);
		
		$('.answer-image').html('<img src="' + currentQuestion.answerImage + '">');

		if (match === true) {
				$('.triviaBox').text('You\'re correct! ' + currentQuestion.response);

				correctGuess++;
			} else {
				$('.triviaBox').text('Sorry! ' + currentQuestion.response);

				wrongGuess++;
		};
			
		questionNumMath();

		//Shows response and waits for setTimeout to print next question.
		var nextQuestion = setTimeout(function() {
			if (questionNum < triviaBank.length) {
				// var nextQuestion = setTimeout(function () {
					printQuestion();
				};

			//Results Page.
			if (questionNum === triviaBank.length) {
				$('.triviaBox, .correct-answer, .answer-image').empty();
				$('.triviaBox').text('Thanks for playing! You answered ' + correctGuess + ' questions correctly and got ' + wrongGuess + ' wrong. Do you want to try again?');
				$('.resetBtn').show();
			}
		}, 8000);
	});
};

//Reset values on restart
$('.resetBtn').on('click', function() {
	$(this).hide();

	questionNum = 0;

	currentQuestion = triviaBank[0];

	correctGuess = 0;

	wrongGuess = 0;

	printQuestion();
});

//Starts game.
$('.startBtn').on('click', function () {
	$(this).hide()
	printQuestion();
});

$('.resetBtn').hide();