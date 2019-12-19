// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function (){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastname = 'Smith';
var john = new Person('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

console.log(john.job);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {valeu: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'},
    })
    */

// Primitives vs objects

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
};


// Objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    names: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

/////////////////////////////////////

/*
// Lecture: Passing function as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <=81) {
    return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc (years, calculateAge);
var fullAges = arrayCalc (ages, isFullAge);
var rates = arrayCalc (ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);
*/


/////////////////////////////////////

// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('what subject do you teach, ' + name + '?')
        }
    } else {
        return function (name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion ('designer');

teacherQuestion('John');
designerQuestion ('John');
designerQuestion ('jane');

interviewQuestion('teacher')('Mark');
*/

/////////////////////////////////////
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

/////////////////////////////////////
// Lectures: Closures

/*
function retirement(retirementAge) {
    var a = ' years left until retirement'
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// retirement(66)(1990);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('what subject do you teach, ' + name + '?')
        } else {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/////////////////////////////////////
// Lecture: Bind, call and apply
 /*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal'){
            console.log( 'Good ' + timeOfDay + ', Ladies and gentlemen! I\'am ' + this.name + ', I\'am ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        } else if (style === 'friendly') {
            console.log( 'Hey! What\'s up? I\'m ' + this.name + ', I\'am ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly, 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');





var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc (years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/


// (function(){
//         function Question (question, answers, correct_answer) {
//             this.question = question;
//             this.answers = answers;
//             this.correct_answer = correct_answer;
//         }
        
        
//         Question.prototype.displayQuestion = function() {
//             console.log(this.question);
//             for (var i = 0; i < this.answers.length; i++) {
//                 console.log(i + ':' + this.answers[i])
//             }
//         }
        
//         Question.prototype.checkAnswer = function(){
//             if (answer === this.correct_answer) {
//                 console.log('correct answer.')
//             } else{
//                 console.log('wrong answer.')
//             }
//         }
        
//         var q1 = new Question('what is the color of Tsagano?', ['white', 'black', 'green', 'brown'], 0);
//         var q2 = new Question('what is this course is for?', ['art', 'economics', 'javascript', 'html&ccs'], 2);
//         var q3 = new Question('where is the Golden gate park?', ['Daly city', 'san francisco', 'oakland', 'palo alto'], 1);
//         var q4 = new Question('what kind of tea mongolains drink', ['green tea', 'sweet tea', 'black tea', 'salty milk tea'], 3);
        
//         var questions = [q1, q2, q3, q4];
        
//         var n = Math.floor(Math.random() * questions.length);
        
//         questions[n].displayQuestion(); 
        
        
//         var answer = parseInt(prompt('enter correct answer.'));
//         questions[n].checkAnswer(answer);

// })();


// (function(){    
//         function Question (question, answers, correct_answer) {
//             this.question = question;
//             this.answers = answers;
//             this.correct_answer = correct_answer;
//         }
        
        
        Question.prototype.displayQuestion = function() {
            console.log(this.question);
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ':' + this.answers[i])
            }
        }
        
        Question.prototype.checkAnswer = function(answ, callback){
            var sc;
            
            if (answ === this.correct_answer) {
                console.log('correct answer.');
                sc = callback(true);

            } else{
                console.log('wrong answer.')
                sc = callback(false);
            }

            this.displayScore(sc);
        }

        Question.prototype.displayScore = function (score) {
            console.log('Your current score is ' + score + '-------------')
        }
        
        var q1 = new Question('what is the color of Tsagano?', ['white', 'black', 'green', 'brown'], 0);
        var q2 = new Question('what is this course is for?', ['art', 'economics', 'javascript', 'html&ccs'], 2);
        var q3 = new Question('where is the Golden gate park?', ['Daly city', 'san francisco', 'oakland', 'palo alto'], 1);
        var q4 = new Question('what kind of tea mongolains drink', ['green tea', 'sweet tea', 'black tea', 'salty milk tea'], 3);
        var questions = [q1, q2, q3, q4];

        function score(){
            var sc = 0;
            return function(correct) {
                if(correct) {
                    sc++;
                }
                return sc;
            }
        }

        var keepScore = score();

        function nextQuestion(){

            var n = Math.floor(Math.random() * questions.length);
            
            questions[n].displayQuestion(); 
            
            
            var answer = prompt('enter correct answer.');
            
            if (answer !== 'exit'){
                questions[n].checkAnswer(parseInt(answer), keepScore);
                nextQuestion();
            }
        }
    nextQuestion();

})();

STEP 7-8

(function(){
    function Question (question, answers, correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer;
    }
    
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        console.log(ans);
        if (parseInt(ans) === this.correct_answer) {
            console.log('correct answer.')
        } else{
            console.log('wrong answer.')
        }
    }
    
    var q1 = new Question('what is the color of Tsagano?', ['white', 'black', 'green', 'brown'], 0);
    var q2 = new Question('what is this course is for?', ['art', 'economics', 'javascript', 'html&ccs'], 2);
    var q3 = new Question('where is the Golden gate park?', ['Daly city', 'san francisco', 'oakland', 'palo alto'], 1);
    var q4 = new Question('what kind of tea mongolains drink', ['green tea', 'sweet tea', 'black tea', 'salty milk tea'], 3);
    


    function nextQuestion(){
        var questions = [q1, q2, q3, q4];
    
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion(); 
        
        var answer = prompt('enter correct answer.');
        // console.log(answer);
        // console.log(typeof(answer));
        // questions[n].checkAnswer(parseInt(answer));

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();
        }
    }
    nextQuestion();

// })();
