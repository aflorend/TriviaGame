//Array of question objects
var triviaBank = 
[
//***Q1***
	{
		questionText: "Test Q1",

		answers: 
		[ 
			{
				text: "test1",

				correct: true
			},

			{
				text: "test2",

				correct: false
			},

			{
				text: "test3",

				correct: false
			},

			{
				text: "test4",

				correct: false
			}
		],

		response: "Response Test 1"
	},

//***Q2***
	{
		questionText: "Test Q2",

		answers: 
		[ 
			{
				text: "test1",

				correct: true
			},

			{
				text: "test2",

				correct: false
			},

			{
				text: "test3",

				correct: false
			},

			{
				text: "test4",

				correct: false
			}
		],

		response: "Response Test 2"
	},

//***Q3***
	{
		questionText: "Test Q3",

		answers: 
		[ 
			{
				text: "test1",

				correct: true
			},

			{
				text: "test2",

				correct: false
			},

			{
				text: "test3",

				correct: false
			},

			{
				text: "test4",

				correct: false
			}
		],

		response: "Response Test 3"
	},

//***Q4***
	{
		questionText: "Test Q4",

		answers: 
		[ 
			{
				text: "test1",

				correct: true
			},

			{
				text: "test2",

				correct: false
			},

			{
				text: "test3",

				correct: false
			},

			{
				text: "test4",

				correct: false
			}
		],

		response: "Response Test 4"
	},

//***Q5***
	{
		questionText: "Test Q5",

		answers: 
		[ 
			{
				text: "test1",

				correct: true
			},

			{
				text: "test2",

				correct: false
			},

			{
				text: "test3",

				correct: false
			},

			{
				text: "test4",

				correct: false
			}
		],

		response: "Response Test 5"
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

var questionTimer;

var correctGuess = 0;

var wrongGuess = 0;

var wins = 0;

var losses = 0;

// Function to display questions and answers
function printQuestion() {

	// Printing current question
	$('.triviaBox').append('<div>')
	.text(currentQuestion.questionText)
	.addClass('question');

	// // Looping to include all potiential answers
	for (i=0; i<currentQuestion.answers.length; i++) {
		var newDiv = $('<div>');
		
		newDiv.text(currentQuestion.answers[i].text)
		.appendTo('.triviaBox')
		.addClass('answers')
		.attr('data-correct', currentQuestion.answers[i].correct);
	};

	match = false;

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
	clearInterval(questionTimer);
	$('.timer').empty();
	$('.triviaBox').empty();
	$('.answers').off('click');

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
		if (questionNum < 5) {
			// var nextQuestion = setTimeout(function () {
				printQuestion();
			};

		//Results Page.
		if (questionNum === 5) {
			$('.triviaBox').empty()
			.text('Game Over');
		}
	}, 8000);
};

//Restart values on restart
function restart() {
	var questionNum = 0;

	var currentQuestion = triviaBank[0];

	var correctGuess = 0;

	var wrongGuess = 0;
};

//Starts game.
printQuestion();