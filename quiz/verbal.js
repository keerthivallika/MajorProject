var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "what is the antonym of EXODUS",
		"options" : [
			{"a": "Influx", 
			 "b": "Home-coming", 
			 "c": "Return", 
			 "d": "Restoration"}
			],
		"answer":"Influx",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "what is the antonym of RELINQUISH",
		"options" : [
			{"a": "Abdicate", 
			 "b": "Renounce",
			 "c":"Possess",
			 "d":"Deny"}
			],
		"answer":"Possess",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Find the correctly spelt word.",
		"options" : [
			{"a": "Efficient", 
			 "b":"Treatmeant", 
			 "c":"Beterment",
			 "d":"Employd"}
			],
		"answer":"Efficient",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Tanya is older than Eric.Cliff is older than Tanya.Eric is older than Cliff.If the first two statements are true, the third statement is",
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
		"question" : "In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.When he?P : 	did not know Q : 	he was nervous and R : 	heard the hue and cry at midnight S : 	what to do ",
		"options" : [
			{"a": "RQPS", 
			 "b":"PQRS",
			 "c":"SQPR",
			 "d":"PSRQ"
			}
			],
		"answer":"RQPS",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "what is the synonym of CORPULENT",
		"options" : [
			{"a": "Lean", 
			 "b": "Gaunt",
			 "c": "Emaciated",
			 "d": "Obese",
			}
			],
		"answer":"Obese",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "What is the synonym of EMBEZZLE",
		"options" : [
			{"a": "Misappropriate", 
			 "b":"Balance",
			 "c":"Remunerate",
			 "d":"Clear",
			}
			],
		"answer":"Misappropriate",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Choose the correct meaning of proverb/idiom,To make clean breast of",
		"options" : [
			{"a": "To gain prominence", 
			 "b":"To praise oneself",
			 "c":"To confess without of reserve",
			 "d":"To destroy before it blooms",
			}
			],
		"answer":"To confess without of reserve",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "choose the one which can be substituted for the given word/sentence. Extreme old age when a man behaves like a fool",
		"options" : [
			{"a": "Imbecility", 
			 "b":"Senility",
			 "c":"Dotage",
			 "d":"Superannuation"
			}
			],
		"answer":"Dotage",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "choose the one which best expresses the given sentence in Passive/Active voice.After driving professor Kumar to the museum she dropped him at his hotel.",
		"options" : [
			{"a": "After being driven to the museum, Professor Kumar was dropped at his hotel.", 
			 "b":"Professor Kumar was being driven dropped at his hotel.",
			 "c":"After she had driven Professor Kumar to the museum she had dropped him at his hotel.",
			 "d":"After she was driven Professor Kumar to the museum she had dropped him at his hotel.",
			}
			],
		"answer":"After being driven to the museum, Professor Kumar was dropped at his hotel.",
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



