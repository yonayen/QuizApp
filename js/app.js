

$(document).ready(function() {
	// Options variable assigned to array with Questions, List of Answers and Correct Option and Question #.
	var options = [{
		question: "Czech Republic",
		answers: ["Ottawa", "Prague", "Vienna", "Windhoek", "Copenhagen"],
		questionNumber: 0,
		correct: 2,
	},
	{
		question: "Botswana",
		answers: ["Gaborone", "N'Jamena", "Riyad", "Muscat", "Cairo"],
		questionNumber: 1,
		correct: 1,
	},
	{
		question: "Syria",
		answers: ["Nairobi", "Buenos Aires", "Damascus", "Abuja", "Abidjan"],
		questionNumber: 2,
		correct: 3,
	},
	{
		question: "Mongolia",
		answers: ["Bratislava", "Vientiane", "Tashkent", "Harare", "Ulan Bator"],
		questionNumber: 3,
		correct: 1,
	},
	{
		question: "Indonesia",
		answers: ["Jakarta", "Phnom Penh", "Lima", "Addis Ababa", "Naypyidaw"],
		questionNumber: 4,
		correct: 1,
	}]



	//global variables
    var numberCorrect = 0;
    var currentQuestion = 0;


    // when answer is submitted by clicking on options
    $(".question-options").on("click", ".answer", function () {
    	currentQuestion++;
    	nextQuestion();
    	rewardStar(); // This is how stars are awarded Empty = False; Full = True
    });


    // when game is over and option to restart is selected
    $(".question-options").on("click", ".restart", function () {
    	numberCorrect = 0; // reset to zero
    	currentQuestion = 0; // reset to zero
    	$(".star").css("display", "none"); // all stars are removed

    	// display first question and 5 answer options
    	var newQuestion = '<h1 class="question-title">'+questions[currentQuestion].question+'</h1>'+
    						'<div class="question-options"><li class="answer">'
    						+questions[currentQuestion].choices[0]+'</li>'
    						'<li class="answer">'
    						+questions[currentQuestion].choices[1]+'</li>'
    						'<li class="answer">'
    						+questions[currentQuestion].choices[2]+'</li>'
    						'<li class="answer">'
    						+questions[currentQuestion].choices[3]+'</li>'
    						'<li class="answer">'
    						+questions[currentQuestion].choices[4]+'</li>';

    	$(".question-options").html(newQuestion); // displays new question
    });


    function rewardStar() {
    	var answer = $("").val();
    }




});