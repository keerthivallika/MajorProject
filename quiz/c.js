var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Who invented C Language.?",
		"options" : [
			{"a": "Charles Babbage", 
			 "b": "Grahambel", 
			 "c": "Dennis Ritchie", 
			 "d": "Steve Jobs"}
			],
		"answer":"Dennis Ritchie",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "C Language is a successor to which language.?",
		"options" : [
			{"a": "FORTRAN", 
			 "b": "D Language",
			 "c":"BASIC",
			 "d":"B Language"}
			],
		"answer":"B Language",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is a C Storage Class.?",
		"options" : [
			{"a": "C Storage decides where to or which memory store the variable.", 
			 "b":"C Storage Class decides what is the default value of a variable.", 
			 "c":"C Storage Class decides what is the Scope and Life of a variable.",
			 "d":"All the above."}
			],
		"answer":"All the above.",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "choose true or false, Structure members can not be initialized at the time of declaration",
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
		"question" : "What is the size of a C structure.?",
		"options" : [
			{"a": "C structure is always 128 bytes.", 
			 "b":"Size of C structure is the total bytes of all elements of structure.",
			 "c":"Size of C structure is the size of largest element.",
			 "d":"None of the above"
			}
			],
		"answer":"Size of C structure is the total bytes of all elements of structure.",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What is the operator used to make 1's One's compliment.?",
		"options" : [
			{"a": "& Bitwise AND Operator", 
			 "b": "| Bitwise OR operator",
			 "c": "~ Bitwise Negate Operator",
			 "d": "^ Bitwise Exclusive OR",
			}
			],
		"answer":"~ Bitwise Negate Operator",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "What is the result of 0110 & 1100.?",
		"options" : [
			{"a": "1000", 
			 "b":"0100",
			 "c":"0001",
			 "d":"1010",
			}
			],
		"answer":"0100",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "what is the abbreviation of C STDIO in stdio.h.?",
		"options" : [
			{"a": "Standard Input Output", 
			 "b":"String Terminating Operations Input Output",
			 "c":"Store Input Output",
			 "d":"None of the above",
			}
			],
		"answer":"Standard Input Output",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What is a format specifier in C language.?",
		"options" : [
			{"a": "A format Specifier tells compiler to treat a variable value is predefined way.", 
			 "b":"Different format specifiers are used to print different type of data.",
			 "c":"Format specifiers are used to write data to files in a formatted way.",
			 "d":"All the above"
			}
			],
		"answer":"All the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "What are the Types of Arrays.?",
		"options" : [
			{"a": "int, long, float, double", 
			 "b":"struct, enum",
			 "c":"char",
			 "d":"All the above",
			}
			],
		"answer":"All the above",
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



