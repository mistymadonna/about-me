// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.

var userName = prompt('What is your name?');
console.log('Their name is ' + userName);

alert('Hey y\'all, and hey ' + userName + ', Let\'s get to know each other. I\'m going to ask you some questions about me. Please answer Y or N. Here we go!');

var answer1 = prompt('Am I from Seattle?');
console.log('Answer to Question 1 was ' + answer1);
if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
  alert('Nice! Memphis born and raised.');
  console.log(userName + ' nailed Question 1');
} else if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'YES') {
  alert('Nope, ' + userName + ' !');
} else {
  alert('C\'mon now.. I said answer with Y or N');
}

var answer2 = prompt('Do I like hot weather?');
console.log('Question 2 answer ' + answer2);
if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'NO') {
  alert('Not even close.');
  console.log(userName + ' incorrect answer');
} else if (answer2.toLowerCase() === 'y' || answer2.toUpperCase() === 'YES') {
  alert('You\'re awesome and correct.');
  console.log(userName + ' correct answer');
} else {
  alert('You gotta follow the instructions now.');
}

var answer3 = prompt('Am I outdoorsy?');
console.log('Question 3 answer ' + answer3);
if (answer3.toLowerCase() === 'y' || answer3.toUpperCase() === 'YES') {
  alert('Yep!');
  console.log(userName + ' correct answer again');
} else if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'NO') {
  alert('Sorry, nope.');
} else {
  alert('You are no fun today.');
}
// Make sure to do good console.log statements
var answer4 = prompt('Do I have a pet?');
console.log('Question 4 ' + answer4);
if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'NO') {
  alert('Wrongo.');
} else if (answer4.toLowerCase() === 'y' || answer4.toUpperCase() === 'YES') {
  alert('You\'re good at this!');
} else {
  alert('So, you\'re a comedian today.');
}

var answer5 = prompt('Do I like seafood?');
console.log('the important question ' + answer5);
if (answer5.toLowerCase() === 'y' || answer5.toUpperCase() === 'YES') {
  alert('Dude! Pike Place Chowder is the bomb!');
} else if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'NO') {
  alert('You don\'t know me at all, sucka.');
} else {
  alert('Lame-o.');
}

//this was a while loop but it doesn't work for the assignment bc it should be a for loop.
// console.log('before the while loop faveNum is' + faveNum);
// while (faveNum !== 7) {
//   var faveNum = parseInt(prompt('What is Misty\'s favorite number?'));
//   console.log('faveNum: ' + faveNum);
//   if (faveNum > 7) {
//     alert('A little too high..');
//   } else if (faveNum < 7) {
//     alert('Not quite there yet..');
//   } else if (faveNum === 7) {
//     alert('You are the bomb!');
//   } else if (typeof(faveNum) === 'number') {
//     alert('Enter a number, dumbass');
//   } else {
//     alert('How did you get here?');
//   }
// }
//}

//this is used if you want to use a while loop and make it run like a for loop.
//var i = 0;
//while (i < 4){

//  i++;
//}


// here is the syntax for a for loop.
//for (var i = startValue;i < endValue; i+=stepValue)

var faveNum = 7;
var faveNumGuess;

console.log('faveNum: ' + faveNum);

for (var i = 0; i < 4; i++) {
  faveNumGuess = prompt('Guess my favorite number!');
  if (isNan(faveNumGuess))
    return;
  faveNumGuess = parseInt(faveNumGuess);
  if (faveNumGuess > 7) {
    alert('A little too high..');
  } else if (faveNumGuess < 7) {
    alert('Not quite there yet..');
  } else if (faveNumGuess === 7) {
    alert('You are the bomb!');
    i = 4;
  } else if (typeof(faveNumGuess) !== 'number') {
    alert('Please enter a number.');
  } else {
    alert('How did you get here?');
  }
}

var faveCities = ['london', 'chicago', 'new orleans', 'los angeles', 'destin'];
var cityGuessFalse = false;

console.log('Question 7 ' + faveCities);

while (cityGuess === false) {
  var cityGuess = prompt('Can you name two of Misty\'s favorite cities?').lowerCase();
  for (var i = 0; i < faveCities.length; i++) {
    console.log(faveCities[i]);
    if (cityGuess === faveCities[i]) {
      alert('You are so smart!');
      cityGuessFalse = true;
    }
  }
  if (cityGuessFalse === false) {
    alert('Sorry, you\'re wrong.');
  }
}
