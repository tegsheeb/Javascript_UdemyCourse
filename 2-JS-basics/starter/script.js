/***************************
*variables and data types
*/

//var firstName = 'John';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);
//
//// variable naming rules
//var _3years = 3;
//var johnMark = 'John and Mark';
//var if = 23;


/**********************
* variables mutation and type coercion
*/

//var firstName = 'John';
//var age = 28;
//
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'teacher';
//isMarried = false;
//
//console.log(firstName + ' is a ' + age + ' year old ' + job + '. is he married?' + isMarried);
//
//// variable mutation
//
//age = 'twenty eight';
//job = 'driver';
//
//alert(firstName + ' is a ' + age + ' year old ' + job + '. is he married?' + isMarried);
//
//var lastName = prompt('what is his last name?');
//console.log(firstName + ' ' + lastName);



/**************************
* Basic operators
*/

//var now, yearJohn, yearMark
//now = 2018;
//ageJohn = 28;
//ageMark = 33;
//
//// Math Operators
//yearJohn = now - ageJohn
//yearMark = now - ageMark;
//
//console.log(yearJohn);
//
//console.log(now + 2);
//console.log(now * 2 );
//console.log(now / 10);
//
//// Logical operators
//var johnOlder = ageJohn > ageMark;
//console.log(johnOlder);
//
//// typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof ' Mark is older than John');
//var x;
//console.log(typeof x);


/**************************
* Operator precedence
*/
//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
//// Multiple operators
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);
//
//
//// grouping
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//
//console.log(average)
//
//// Multiple assignments
//
//var x, y;
//x = y = (3+5) * 4 -6;
//console.log(x, y);
//
//// more operators
//
////x = x * 2;
//x *= 2;
//console.log(x)
//x += 10;
//console.log(x);
//
////x = x + 1;
////x += 1
//x++;
//console.log(x);
//
//x--;
//console.log(x);


/**************
*Coding Challenge 1
*/

//var weightMark, weightJohn, heightMark, heightJohn;
//weightMark = 65; //kg
//weightJohn = 50; //kg
//heightMark = 1.75; //meters
//heightJohn = 1.80; //meters
//
//var bmiMark, bmiJohn;
//
//bmiMark = weightMark / (heightMark * heightMark);
//bmiJohn = weightJohn / (heightJohn * heightJohn);
//
//var isMarkhigher = bmiMark > bmiJohn;
//console.log("is Mark's BMI is higher than John's? " + isMarkhigher );


/********************************
* If / Else statements
*/

//var firstName = 'John';
//var civilStatus = 'single';
//
//if(civilStatus === 'married'){
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' will hopefully marry soon');
//}
//
//var isMarried = true;
//if(isMarried){
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' will hopefully marry soon');
//}
//
//
//var weightMark, weightJohn, heightMark, heightJohn;
//weightMark = 65; //kg
//weightJohn = 50; //kg
//heightMark = 1.75; //meters
//heightJohn = 1.80; //meters
//
//var bmiMark, bmiJohn;
//
//bmiMark = weightMark / (heightMark * heightMark);
//bmiJohn = weightJohn / (heightJohn * heightJohn);
//
//if (bmiMark > bmiJohn) {
//    console.log('Mark\'s BMI is higher than John\'s'.)
//} else {
//    console.log('John\'s BMI is higher than Mark\'s. ')
//}

/********************************
* Boolean logic
*/

//var firstName = 'John';
//var age = 20;
//
//if (age < 13){
//    console.log(firstName + ' is a boy.');
//} else if (age >= 13 && age < 20 ) {
//    console.log(firstName + ' is a teenager.');
//} else if(age >= 20 && age <30){
//    console.log(firstName + ' is a young man.');
//}else {
//    console.log(firstName + ' is a man.');
//}


/********************************
* The Ternary/conditional operator and switch statements
*/

//var firstName = 'John';
//var age = 22;
//
//// Ternary operator
//age >= 18 ? console.log(firstName + ' drinks beer.')
//: console.log(firstName + ' drinks juice.');
//
//var drink = age >= 18 ? 'beer' : 'juice';
//console.log(drink);

//if (age >= 18){
//    var drink = 'beer';
//} else{
//    var drink = 'juice';
//}

// Switch statement
//var job = 'instructor';
//switch(job){
//    case 'teacher':
//    case 'instructor':
//        console.log(firstName + ' teaches kids how to code.');
//        break;
//    case 'driver':
//        console.log(firstName + ' drives an uber in Lisbon.');
//        break;
//    case 'designer':
//        console.log(firstName + 'designes beautiful websites.');
//        break;
//    default:
//        console.log(firstName + ' does something else.');
//}
//
//
//var firstName = 'John';
//var age = 45;
//
//switch(true){
//    case age < 13:
//        console.log(firstName + ' is a boy.');
//        break;
//    case age >= 13 && age < 20:
//        console.log(firstName + ' is a teenager.');
//        break;
//    case age >= 20 && age <30:
//        console.log(firstName + ' is a young man.');
//        break;
//    default:
//        console.log(firstName + ' is a man.');
//}


/********************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', Null
// truthy values: NOT falsy values
//
//var height;
//height  = '';
//if  (height || height === 0){
//    console.log('Variable is defined');
//} else{
//    console.log('Variable has NOT defined');
//}
//
//// equality operators
//if (height == '23'){
//    console.log('the == operatos does type coercion');
//}


/********************************
* Coding Challenge 2
*/

//var averageJohnTeam = (89 + 120 + 103)/3;
//var averageMarkTeam = (116 + 94 + 123)/3;
//var averageMaryTeam = (97 + 134 + 125)/3;
//
//switch (true){
//    case averageJohnTeam > averageMarkTeam && averageJohnTeam > averageMaryTeam:
//        console.log('John\'s team won and its average score was ' + averageJohnTeam + '.');
//        break;
//    case averageJohnTeam < averageMarkTeam && averageMaryTeam < averageMarkTeam:
//        console.log('Mark\'s team won and its average score was ' + averageMarkTeam + '.');
//        break;
//    case averageMaryTeam > averageJohnTeam && averageMaryTeam > averageJohnTeam:
//        console.log('Mary\'s team won and its average score was ' + averageMarkTeam + '.');
//        break;
//    default:
//        console.log('there was a draw ' + averageJohnTeam + '.');    
//}

/********************************
* Functions
*/

//function calculateAge(birthYear){
//    return 2018 - birthYear;
//}
//
//var ageJohn = calculateAge(1990);
//var ageMike = calculateAge(1948);
//var ageJane = calculateAge(1969);
//
//console.log(ageJohn, ageMike, ageJane);
//
//function yearsUntilRetirement(Year, firstName){
//    var age = calculateAge(Year);
//    var retirement = 65 - age;
//    
//    if (retirement > 0){
//    console.log(firstName + ' retires in ' + retirement + ' years. ');
//    }else{
//        console.log(firstName + ' is already retired. ');
//    }
//}
//
//yearsUntilRetirement(1990, 'John');
//yearsUntilRetirement(1948, 'Mike');
//yearsUntilRetirement(1969, 'Jane');

/********************************
* Function Statements and Expressions
*/


//// fucntion declaration
////var whatDoYouDon (job, firstName){}
//
//// Function expressions
//var whatDoYouDo = function(job, firstName){
//    switch(job){
//        case 'teacher':
//            return firstName + 'teaches kids how to code.'
//        case 'driver':
//            return firstName + ' drives a cab in lisbon. '
//        case 'designer': firstName + 'designs beautiful websites. '
//        default: 
//            return firstName + ' does something else. '
//    }
//};
//
//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('designer', 'John'));
//console.log(whatDoYouDo('retired', 'John'));


/********************************
* Arrays
*/

//// Initiate new array
//var names = ['John', 'Mark', 'Jane'];
//var years= new Array (1998, 1969, 1948);
//
//console.log(names[2]);
//console.log(names.length);
//
//
//// Mutate array data
//names[1] = 'Ben';
//names[names.length] = 'Mary';
//console.log(names);
//
////Different data type
//var john = ['John', 'Smith', 1990, 'teacher', false];
//
//john.push('blue');
//john.unshift('Mr.');
//console.log(john);
//
//john.pop();
//john.pop();
//john.shift();
//console.log(john);
//
//console.log(john.indexOf(19));
//
//var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a designe';
//console.log(isDesigner);


/********************************
* Coding Challange 3
*/


//function tipCalculator(bill) {
//    if (bill < 50){
//        return (bill * 0.2);
//    } else if (50 <= bill <= 200) {
//        return bill * 0.15;
//    } else {
//        return bill * 0.10;
//    }        
//}
//
//var bills = [124, 48, 268];
//var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]) ];
//var totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
//console.log(tips);
//console.log(totalBill);


/********************************
* Objects and Properties
*/

// Object literal
//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1999,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
//
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
//// new object syntax
//var jane = new Object();
//jane.firstName = 'Jane';
//jane.birthYear = 1959;
//jane['lastName'] = 'Smith';
//console.log(jane);


/********************************
* Objects and methods
*/

//
//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1992,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function() {
//        this.age = 2018 - this.birthYear;
//    }
//};
//
//john.calcAge();
//console.log(john);


/********************************
* Coding Challenge 4
*/

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    weight: 50,
//    height: 1.80,
//    calcBmi: function(){
//        this.bmi = this.weight / (this.height * this.height);
//    }
//}
//
//var mark = {
//    firstName: 'Mark',
//    lastName: 'Johnson',
//    weight: 65,
//    height: 1.75,
//    calcBmi: function(){
//        this.bmi = this.weight / (this.height * this.height);
//    }
//}
//
//
//if (john.calcBmi()> mark.calcBmi()){
//    console.log(john.firstName + ' ' + john.lastName + 'has higher BMI index and it is ' + john.bmi)
//} else if(john.bmi < mark.bmi){
//    console.log(mark.firstName + ' ' + mark.lastName + 'has higher BMI index and it is ' + mark.bmi)
//} else {
//    console.log(mark.firstName + ' ' + mark.lastName + ' ' + 'and' + john.firstName + ' ' + john.lastName + 'has higher BMI index and it is ' + mark.bmi)
//}
//    


/********************************
* Loops and Iteration
*/

//for (var i = 1; i <= 20; i += 2){
//    console.log(i);
//}
//
//
//var john = ['John', 'Smith', 1990, 'designer', false];
//for (var i = 0; i < john.length; i++){
//    console.log(john[i]);
//}
//
//var i = 0;
//while (i < john.length) {
//    console.log(john[i]);
//    i++;
//}


// Continue and break statements
//var john = ['John', 'Smith', 1990, 'designer', false];
//for (var i = 0; i < john.length; i++){
//    if (typeof john[i] !== 'string') continue;
//    console.log(john[i]);
//}
//
//for (var i = 0; i < john.length; i++){
//    if (typeof john[i] !== 'string') break;
//    console.log(john[i]);
//}
//
//
//// looping backwards
//for (var i = john.length - 1; i >= 0; i--){
//    console.log(john[i]);
//}

/********************************
* Coding Challenge 5
*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 190, 42],
    calcTips: function (){
        this.tips = [];
        this.finalValue = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            
            if ( bill < 50){
                percentage = 0.2;
            } else if (50 <= bill <= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
        };
    }
}


var mark = {
    fullName: 'mark Smith',
    bills: [77, 375, 110, 45],
    calcTips: function (){
        this.tips = [];
        this.finalValue = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            
            if ( bill < 100){
                percentage = 0.2;
            } else if (100 <= bill <= 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
        };
    }
}




function averageTips(array){
    var sum = 0;
    for (i = 0; i < array.length; i ++){
        sum += array[i];
    }
    return (sum / array.length)
}


john.calcTips();
mark.calcTips();
console.log(john, mark);
console.log(averageTips(john.tips));
console.log(averageTips(mark.tips));





























