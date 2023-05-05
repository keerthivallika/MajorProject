var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Who invented Java Language.?",
		"options" : [
			{"a": "Charles Babbage", 
			 "b": "James Gosling", 
			 "c": "Dennis Ritchie", 
			 "d": "Steve Jobs"}
			],
		"answer":"James Gosling",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Which component is used to compile, debug and execute the java programs?",
		"options" : [
			{"a": "JRE", 
			 "b": "JIT",
             "c":"JDK",
			 "d":"JVM"}
			],
		"answer":"JDK",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which one of the following is not a Java feature?",
		"options" : [
			{"a": "Object-oriented", 
			 "b":"Use of pointers", 
			 "c":"Portable",
			 "d":"Dynamic and Extensible"}
			],
		"answer":"Use of pointers",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Compilation is oops concept in java",
		"options" : [
			{"a": "True", 
			 "b":"False",
			 "c":"Uncertain"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Which environment variable is used to set the java path? ",
		"options" : [
			{"a": "MAVEN_Path", 
			 "b":"JavaPATH",
			 "c":"JAVA",
			 "d":"JAVA_HOME"
			}
			],
		"answer":"JAVA_HOME",
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
		"question" : "Which of these keywords is used to define interfaces in Java?",
		"options" : [
			{"a": "intf", 
			 "b":"Intf",
			 "c":"interface",
			 "d":"Interface",
			}
			],
		"answer":"interface",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Which of the following is a superclass of every class in Java? ",
		"options" : [
			{"a": "ArrayList", 
			 "b":"Abstract class",
			 "c":"Object class",
			 "d":"String",
			}
			],
		"answer":"Object class",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : " Which of the below is not a Java Profiler?",
		"options" : [
			{"a": "JProfiler", 
			 "b":"Eclipse Profiler",
			 "c":"JVM",
			 "d":"JConsole"
			}
			],
		"answer":"JVM",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of these packages contains the exception Stack Overflow in Java?",
		"options" : [
			{"a": "java.io", 
			 "b":"java.system",
			 "c":"java.lang",
			 "d":"java.util",
			}
			],
		"answer":"java.lang",
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



