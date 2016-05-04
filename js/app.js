$(document).ready(function() {
	restartQuiz();
});

// var options array houses Questions key-value pairs, Answers array and the correct answer]

var options = [{
	question: "Czech Republic",
	answers: ["Ottawa", "Prague", "Vienna", "Windhoek", "Copenhagen"],
	correct: 1,
},
{
	question: "Botswana",
	answers: ["Gaborone", "N'Jamena", "Riyad", "Muscat", "Cairo"],
	correct: 0,
},
{
	question: "Syria",
	answers: ["Nairobi", "Buenos Aires", "Damascus", "Abuja", "Abidjan"],
	correct: 2,
},
{
	question: "Mongolia",
	answers: ["Bratislava", "Vientiane", "Tashkent", "Harare", "Ulan Bator"],
	correct: 4,
},
{
	question: "Indonesia",
	answers: ["Jakarta", "Phnom Penh", "Lima", "Addis Ababa", "Naypyidaw"],
	correct: 0,
}];


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
		
	}

});



