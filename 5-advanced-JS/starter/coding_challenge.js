var Question = function(question, answers, correct_answer) {
    this.question = question;
    this.answers = answers;
    this.correct_answer = correct_answer;
}

var question1 = new Question('what is the color of Tsagano?', ['white', 'black', 'green', 'brown'], 0);
var question2 = new Question('what is this course is for?', ['art', 'economics', 'javascript', 'html&ccs'], 2);
var question3 = new Question('where is the Golden gate park?', ['Daly city', 'san francisco', 'oakland', 'palo alto'], 1);
var question4 = new Question('what kind of tea mongolains drink', ['green tea', 'sweet tea', 'black tea', 'salty milk tea'], 3);

array_questions = [question1, question2, question3, question4];

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }


// Lecture: IIFE (immediately invoked function expression)

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

/*
(function game() {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();

// console.log(score);

(function game(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
*/
