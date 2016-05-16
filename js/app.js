$(document).ready(function() {
	loadQuestions(); // new quiz launched at pageLoad.
});

// var options array houses Questions key-value pairs, Answers array and the correct answer]

var options = [];

function loadQuestions() {
	$.getJSON("questions.json", function (data){
		options = data.options
		restartQuiz();
	});
}

// global variables

var numberCorrect = 0;  // initial value
var currentQuestion = 0; // starts with first question in var options

// answer submitted when option is clicked

$(".question-options").on("click", ".answer", function () {

	if(true == $(this).hasClass("nextQuestion"))
	{
		nextQuestion();
	}
	else
	{
    	if(true == $(this).data("correctanswer"))
    	{
    	 	// This is how stars are awarded Empty = False; Full = True
    		rewardStar(true);
    		updateQuestionTitle("Correct!");
    		$(".answer-correct").text("Next");
    		numberCorrect++;
    	}
    	else
    	{
    		rewardStar(false);
    		// updateQuestionTitle("Incorrect! The answer is " + options[currentQuestion].answers[ options[currentQuestion].correct ]);
    		updateQuestionTitle("Incorrect! The answer is:");
    	}

    	$(".answer-incorrect").remove();

    	$(".answer-correct").addClass("nextQuestion");

    	updateScore(numberCorrect,options.length);
    }
});

function restartQuiz()
{
	numberCorrect = 0; // reset to zero
	currentQuestion = 0; // reset to zero

	$(".score-icons").empty();
	$(".question-options").empty();

	updateScore(numberCorrect,options.length);
	updateQuestionTitle(options[currentQuestion].question);
	updateQuestionOptions(options[currentQuestion].answers, options[currentQuestion].correct);
}

function rewardStar(correct) {
	var starClass = 'fa-star-o';
	if(correct)
	{
		starClass = 'fa-star';
	}
	$(".score-icons").append('<i class="fa ' + starClass + '" aria-hidden="true"></i>');
}

function updateScore(score,max)
{
	$(".number-score").html("<p>" + score + " out of " + max + "</p>");
}

function updateQuestionTitle(title)
{
	$(".question-title").text(title);
}

function updateQuestionOptions(optionsArray,correct)
{
	for(var i=0; i<optionsArray.length;i++)
	{
		//["Nairobi", "Buenos Aires", "Damascus", "Abuja", "Abidjan"]
		//       0             1           2          3          4
		var correctAnswer = false;
		var correctAnswerClass = "incorrect";
		if(i==correct)
		{
			correctAnswer = true;
			correctAnswerClass = "correct";
		}
		// ?
		$(".question-options").append('<li class="answer answer-' + correctAnswerClass + '" data-correctanswer="' + correctAnswer + '" >' + optionsArray[i] + '</li>');
	}
}

function nextQuestion()
{
	currentQuestion++;

	if (currentQuestion < options.length)
	{
		showNextQuestion();
	}
	else
	{
		showFinalScore();

	}
}

function showNextQuestion()
{
	$(".question-options").empty();

	updateScore(numberCorrect,options.length);
	updateQuestionTitle(options[currentQuestion].question);
	updateQuestionOptions(options[currentQuestion].answers, options[currentQuestion].correct);
}

function showFinalScore()
{
	$(".question-title").text("GAME OVER!");
	$(".score-icons").empty();
	$(".number-score").css({"color": "#B0B0B0", "font-size": "2em", "font-weight": "bold"});

	$(".question-options").on("click", ".answer", function () {
		$(".answer-correct").text("Next");
	});
}

	//1. Check if currentQuestion index is still in boundaries for the options array
	//2. If it is, show the next question, (like the restart quiz, but without reseting current question and score to 0)
	//3. If it is not, present a way to restart the quiz. e.g., a button with an event listener that calls the restart quiz function.




