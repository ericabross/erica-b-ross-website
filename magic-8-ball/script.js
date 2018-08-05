$(document).ready(function(){
	
	var magic8Ball = {};

	magic8Ball.answers = ["It remains to be seen", "Unequivocally", "A-duh!", "Hell no!", "Why are you asking me?!", "Hmmm...ask again"];
	
	$("#answer").hide();
	
	magic8Ball.askQuestion = function (question) {
    	$("#answer").hide(); 
		
		$("#8ball").effect("shake");
    
    	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    	
    	$("#answer").fadeIn(4000);
    
    	var randomNumber = Math.random();
		var randomNumberForAnswers = randomNumber * this.answers.length;
		var randomIndex = Math.floor (randomNumberForAnswers);
		var answer = this.answers [randomIndex];
		
    	$("#answer").text(answer);
		
    	console.log (question);
		console.log (answer);
	};
	
	var onClick = function(){
		$("#answer").hide();
    
    	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	
  		setTimeout(
			function(){
				var question = prompt("Ask me a yes/no question!");
        		
        		magic8Ball.askQuestion(question);
			}, 500);
  	};
  
  	$("#questionButton").click(onClick);
	
});