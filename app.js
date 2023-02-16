function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Your Result</h1>";
    
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
   
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Who I'm?", ["Man", "Girl","Boy", "none"], "Man", "Girl", "Boy"),
    new Question("Who is the youngest IAS Officer in future?", ["Ias Punam", "aasdv","bdsv", "cdv"], "Ias Punam"),
    new Question("Who is the Co-founder of InTok?", ["soni", "aasdv","Mr.Chandan Sony", "cdv"], "Mr.Chandan Sony"),
    new Question("Who is the Father of youngest IAS Officer in future?", ["Mr.Vijay Soni", "Raman","Ratan", "Arman"], "Mr.Vijay Soni"),
    new Question("Who is the Mother of youngest IAS Officer in future?", ["rani", "Rambha Rani","Ratana", "jyoti"], "Rambha Rani"),
    new Question("Who is the Brother of youngest IAS Officer in future?", ["soni", "Suraj soni","Yuvraj soni", "ss"], "Yuvraj soni"),
    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),
    new Question("Who Developed HTML?", ["Tim Berners-Lee", "axsdc","bsddc", "csfvd"], "Tim Berners-Lee"),    
    new Question("Who Developed CSS?", ["Ias Punam", "HÃ¥kon Wium Lie","bdsfc", "csc"], "HÃ¥kon Wium Lie"),
    new Question("Who Developed JavaScript?", ["Ias Punam", "aSAC","Brendan Eich", "cAC"], "Brendan Eich"),
    new Question("Who Developed nodeJS?", ["Ias Punam", "aDSaC","bSC", "Ryan Dahl"], "Ryan Dahl"),
    new Question("Who Developed ReactJS?", ["mIas m", "adsaC","bSDC", "Jordan Walke"], "Jordan Walke"),
    new Question("Who is the Founder Mongodb?", ["Dwight Merriman", "aasD","bsadc", "cZXC"], "Dwight Merriman"),

];


var quiz = new Quiz(questions);


populate();



