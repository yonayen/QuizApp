var options = ["question 1","question 2","question 3"]

//Leave this for later
$(".question-options").on("click","li",function()
{
	//Check the answer, then update the quesiton title and options to the next question.
});

function checkAnswer(index)
{
	//Leave this for later.
}

function updateQuestionTitle(title)
{
	//Replace the Title Text
}

function updateQuestionOptions(options)
{
	//1.Empty the UL

	//2.Loop through the options array and append them to the UL
}

$(document).ready(function() {
	// Questions array
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
	},
	}];


//global variables
    var numberCorrect = 0;
    var currentQuestion = 0;

   //  $(".question-options").on("click", "#submit", function () {
   //      updateCup();
   //      currentQuestion++;
   //      nextQuestion();
   //  });

   //  $(".question-options").on("click", "#retry_button", function () {
   //      numberCorrect = 0;
   //      currentQuestion = 0;
   //      $(".score_cup").css("display", "none");
   //      $("#score_cup0").css("display", "inline");
   //      var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
   //      $("#question_wrapper").html(newQuestion);
   //      $("#last_question_fact").html("");
   //  });

   //  function updateCup() {
   //      var answer = $("input[type='radio']:checked").val();
   //      if (answer == questions[currentQuestion].correct) {
   //          numberCorrect++;
   //      }
   //      if (numberCorrect == 1) {
   //          $(".score_cup").css("display", "none")
   //          $("#score_cup1").fadeIn();
   //      }
   //      else if (numberCorrect == 2) {
   //          $(".score_cup").css("display", "none")
   //          $("#score_cup2").fadeIn();
   //      }
   //      else if (numberCorrect == 3) {
   //          $(".score_cup").css("display", "none")
   //          $("#score_cup3").fadeIn();
   //      }
   //      else if (numberCorrect == 4) {
   //          $(".score_cup").css("display", "none")
   //          $("#score_cup4").fadeIn();
   //      }
   //      else if (numberCorrect == 5) {
   //          $(".score_cup").css("display", "none")
   //          $("#score_cup5").fadeIn();
   //      }
   //  }

   //  function nextQuestion() {
   //      if (currentQuestion < 5) {
   //          $(".question").remove();
   //          $("#answer_holder input").remove();
   //          $("#answer_holder span").remove();
			// $("#last_question_fact").hide();
   //          var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
   //          $("#question_wrapper").html(newQuestion);
   //          var lastFact= questions[currentQuestion-1].fact;
   //          $("#last_question_fact").html(lastFact).fadeIn();
   //      }
   //      else {
   //          $(".question").remove();
   //          $("#answer_holder input").remove();
   //          $("#answer_holder span").remove();
			// $("#last_question_fact").fadeOut();
   //          $("#submit").css("display", "none");
   //          $("#retry_button").css("display", "inline");
   //          var lastFact= questions[currentQuestion-1].fact;
   //          $("#last_question_fact").html(lastFact);
   //          if (numberCorrect == 1) {
   //              var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
   //              $("#answer_holder").html(finalScore);
   //          }
   //          else {
   //              var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
   //              $("#answer_holder").html(finalScore);
   //          }
   //      }
   //  }
});