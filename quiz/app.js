var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is?",
		"options" : [
			{"a": "45 km/hr", 
			 "b": "50 km/hr", 
			 "c": "54 km/hr", 
			 "d": "55km/hr"}
			],
		"answer":"50 km/hr",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : " Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case?",
		"options" : [
			{"a": "4", 
			 "b": "7",
			 "c":"9",
			 "d":"13"}
			],
		"answer":"4",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
		"options" : [
			{"a": "6.25", 
			 "b":"6.5", 
			 "c":"6.75",
			 "d":"7"}
			],
		"answer":"6.25",
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
		"question" : "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:?",
		"options" : [
			{"a": "150°", 
			 "b":"145°",
			 "c":"155°",
			 "d":"160°"
			}
			],
		"answer":"155°",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?",
		"options" : [
			{"a": "6400", 
			 "b": "6500",
			 "c": "7200",
			 "d": "7500",
			}
			],
		"answer":"6400",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "A sum of money amounts to Rs. 9800 after 5 years and Rs. 12005 after 8 years at the same rate of simple interest. The rate of interest per annum is:?",
		"options" : [
			{"a": "5%", 
			 "b":"8%",
			 "c":"12%",
			 "d":"15%",
			}
			],
		"answer":"12%",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:?",
		"options" : [
			{"a": "149 m", 
			 "b":"156 m",
			 "c":"173 m",
			 "d":"200 m",
			}
			],
		"answer":"173 m",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : " A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
		"options" : [
			{"a": "12 days", 
			 "b":"15 days",
			 "c":"16 days",
			 "d":"18 days"
			}
			],
		"answer":"15 days",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : " A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
		"options" : [
			{"a": "Rs. 375", 
			 "b":"Rs. 400",
			 "c":"Rs. 600",
			 "d":"Rs. 800",
			}
			],
		"answer":"Rs. 400",
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



