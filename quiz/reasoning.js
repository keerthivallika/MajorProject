var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
		"options" : [
			{"a": "(1/3)", 
			 "b": "(1/8)", 
			 "c": "(2/8)", 
			 "d": "(1/16)"}
			],
		"answer":"(1/8)",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
		"options" : [
			{"a": "7", 
			 "b": "10",
			 "c":"12",
			 "d":"13"}
			],
		"answer":"10",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which word does NOT belong with the others?",
		"options" : [
			{"a": "parsley", 
			 "b":"basil", 
			 "c":"dill",
			 "d":"mayonnaise"}
			],
		"answer":"mayonnaise",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Blueberries cost more than strawberries.Blueberries cost less than raspberries.Raspberries cost more than strawberries and blueberries.If the first two statements are true, the third statement is",
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
		"question" : "Statements: All bags are cakes. All lamps are cakes.Conclusions:1.Some lamps are bags.2.No lamp is bag.",
		"options" : [
			{"a": "Only conclusion I follows", 
			 "b":"Only conclusion II follows",
			 "c":"Either I or II follows",
			 "d":"Neither I nor II follows"
			}
			],
		"answer":"Either I or II follows",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Marathon is to race as hibernation is to",
		"options" : [
			{"a": "winter", 
			 "b": "bear",
			 "c": "dream",
			 "d": "sleep",
			}
			],
		"answer":"sleep",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Window is to pane as book is to",
		"options" : [
			{"a": "novel", 
			 "b":"glass",
			 "c":"cover",
			 "d":"page",
			}
			],
		"answer":"page",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Here are some words translated from an artificial language.hapllesh means cloudburst,srenchoch means pinball,resbosrench means ninepin,Which word could mean cloud nine?",
		"options" : [
			{"a": "leshsrench", 
			 "b":"ochhapl",
			 "c":"haploch",
			 "d":"haplresbo",
			}
			],
		"answer":"haplresbo",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "choose the word that is a necessary part of the word. harvest",
		"options" : [
			{"a": "autumn", 
			 "b":"stockpile",
			 "c":"tractor",
			 "d":"crop"
			}
			],
		"answer":"crop",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "SCD, TEF, UGH, ____, WKL",
		"options" : [
			{"a": "CMN", 
			 "b":"UJI",
			 "c":"VIJ",
			 "d":"IJT",
			}
			],
		"answer":"VIJ",
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



