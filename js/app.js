// window.onload = function () {
// 	clockDraw.init();
// };



$(document).ready(function(){
	restartQuiz();
});

// Options variable assigned to array with Questions, List of Answers and Correct Option and Question #.
var options = [{
	question: "Czech Republic",
	answers: ["Ottawa", "Prague", "Vienna", "Windhoek", "Copenhagen"],
	correct: 2,
},
{
	question: "Botswana",
	answers: ["Gaborone", "N'Jamena", "Riyad", "Muscat", "Cairo"],
	correct: 1,
},
{
	question: "Syria",
	answers: ["Nairobi", "Buenos Aires", "Damascus", "Abuja", "Abidjan"],
	correct: 3,
},
{
	question: "Mongolia",
	answers: ["Bratislava", "Vientiane", "Tashkent", "Harare", "Ulan Bator"],
	correct: 1,
},
{
	question: "Indonesia",
	answers: ["Jakarta", "Phnom Penh", "Lima", "Addis Ababa", "Naypyidaw"],
	correct: 1,
}];

//global variables
var numberCorrect = 0;
var currentQuestion = 0;

// when answer is submitted by clicking on options
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
		$(".question-options").append('<li class="answer answer-' + correctAnswerClass + '" data-correctanswer="' + correctAnswer + '" >' + optionsArray[i] + '</li>');
	}
}

function nextQuestion()
{
	currentQuestion++;
	//1. Check if currentQuestion index is still in boundaries for the options array
	//2. If it is, show the next question, (like the restart quiz, but without reseting current question and score to 0)
	//3. If it is not, present a way to restart the quiz. e.g., a button with an event listener that calls the restart quiz function.
}