var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Who invented python Language.?",
		"options" : [
			{"a": "Guido van Rossum", 
			 "b": "Grahambel", 
			 "c": "Dennis Ritchie", 
			 "d": "Steve Jobs"}
			],
		"answer":"Guido van Rossum",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What is the maximum possible length of an identifier?",
		"options" : [
			{"a": "16", 
			 "b": "32",
			 "c":"64",
			 "d":"None of these above"}
			],
		"answer":"None of these above",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : " What do we use to define a block of code in Python language?",
		"options" : [
			{"a": "Key", 
			 "b":"Brackets", 
			 "c":"Indentation",
			 "d":"None of these"}
			],
		"answer":"Indentation",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "choose true or false, Objects are real-world entities while classes are not real regarding the object-oriented programming concept in Python?",
		"options" : [
			{"a": "True", 
			 "b":"False",
			 "c":"Uncertain"
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : " What is the method inside the class in python language?",
		"options" : [
			{"a": "Object", 
			 "b":"Function",
			 "c":"Attribute",
			 "d":"Argument"
			}
			],
		"answer":"Function",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Which of the following is not a keyword in Python language?",
		"options" : [
			{"a": "val", 
			 "b": "raise",
			 "c": "try",
			 "d": "with",
			}
			],
		"answer":"val",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Which of the following is correctly evaluated for this function pow(x,y,z)?",
		"options" : [
			{"a": "(x**y) / z", 
			 "b":"(x / y) * z",
			 "c":"(x**y) % z",
			 "d":"(x / y) / z",
			}
			],
		"answer":"(x**y) % z",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Study the following function: any([5>8, 6>3, 3>1])  ",
		"options" : [
			{"a": "False", 
			 "b":"True",
			 "c":"Invalid code",
			 "d":"None of these",
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "The output to execute string.ascii_letters can also be obtained from:?",
		"options" : [
			{"a": "character", 
			 "b":"ascii_lowercase_string.digits",
			 "c":"lowercase_string.upercase",
			 "d":"ascii_lowercase+string.ascii_upercase"
			}
			],
		"answer":"ascii_lowercase+string.ascii_upercase",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "What will be the output of this statement:>>> print(0xA + 0xB + 0xC)?",
		"options" : [
			{"a": "33", 
			 "b":"63",
			 "c":"0xA + 0xB + 0xC",
			 "d":"None of these",
			}
			],
		"answer":"0xA + 0xB + 0xC",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



