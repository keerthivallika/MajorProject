var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Who invented C++ Language.?",
		"options" : [
			{"a": "Charles Babbage", 
			 "b": "James Gosling", 
			 "c": "Dennis Ritchie", 
			 "d": "Bjarne Stroustrup"}
			],
		"answer":"Bjarne Stroustrup",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What is C++?",
		"options" : [
			{"a": "C++ is an object oriented programming language", 
			 "b": "C++ is a procedural programming language",
             "c":"C++ supports both procedural and object oriented programming language",
			 "d":"C++ is a functional programming language"}
			],
		"answer":"C++ supports both procedural and object oriented programming language",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which of the following user-defined header file extension used in c++?",
		"options" : [
			{"a": "hg", 
			 "b":"cpp", 
			 "c":"h",
			 "d":"hf"}
			],
		"answer":"h",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "virtual inheritance is a C++ technique to avoid multiple copies of the base class into children/derived class",
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
		"question" : "Which of the following is not a type of Constructor in C++?",
		"options" : [
			{"a": "Default constructor", 
			 "b":"Parameterized constructor",
			 "c":"Copy constructor",
			 "d":"Friend constructor"
			}
			],
		"answer":"Friend constructor",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : " Which of these are selection statements in Java?",
		"options" : [
			{"a": "break", 
			 "b": "continue",
			 "c": "for()",
			 "d": "if()",
			}
			],
		"answer":"if()",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Which of the following type is provided by C++ but not C?",
		"options" : [
			{"a": "double", 
			 "b":"float",
			 "c":"int",
			 "d":"bool",
			}
			],
		"answer":"bool",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "By default, all the files in C++ are opened in _________ mode.",
		"options" : [
			{"a": "Binary", 
			 "b":"VTC",
			 "c":"Text",
			 "d":"ISCII",
			}
			],
		"answer":"Text",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Which of the following correctly declares an array in C++?",
		"options" : [
			{"a": "array{10};", 
			 "b":"array array[10];",
			 "c":"int array;",
			 "d":"int array[10];"
			}
			],
		"answer":"int array[10];",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which is more effective while calling the C++ functions?",
		"options" : [
			{"a": "call by object", 
			 "b":"call by pointer",
			 "c":"call by value",
			 "d":"call by reference",
			}
			],
		"answer":"call by reference",
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



