// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create a variable called name and set it equal to the string Dane.
//Check to see if name is equal to the string Mary, if it is then the code will console.log the string Hi, Mary!
//If name does not equal Mary then the code for else will run which will console.log the string How do you do?
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//Create a variable named secret and leave the variable empty. Create another variable called code and set equal to 123.
//Check to see if code equals 123, if it does then the variable secret will equal the string super and code will then equal codes initial value multiplied by two.
//Check to see if code is greater than 250, if it is then the variable secret will equal the string duper.
//Then console.log the value of the variable secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//Create variable called isStudent and set equal to boolean value true.
//Create variable called age and set equal to 34.
//Create variable called zip and set equal to 55407.
//Check if isStudent equals true AND if zip is greater than 80000, if both arguements are true console.log the string You're a student on the West Coast!
//If isStudent equals false or age is less than 30, console.log the string What are your hobbies?
//If isStudent equals true, console.log the string Welcome to Prime!
//If none of the following arguements return true the else code will run which will console.log the string How about the weather?

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo are set equal to the wrong colors. colorOne should be equal to blue and colorTwo should be equal to red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// FIX - only colorOne was set to 'purple' when colorTwo also should've been set to 'purple'.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - In the if arguement, they use || which means or but it should be && for and.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// Fix - we are checking if minAge is less than or equal to age when it should be if age is greater than or equal to minAge.
// Fix - the console.logs should be switched so that 'enter' is with the if statement and 'no entry' is with the else statement.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
