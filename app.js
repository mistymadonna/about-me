// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer

var userName = prompt('What is your name?');
console.log('Their name is ' + userName);

alert('Hey y\'all, and hey ' + userName + ', Let\'s get to know each other. I\'m going to ask you some questions about me. Please answer Y or N. Here we go!');

var pTagOne = document.getElementById('ans-one');

function seattleHome() {
  var answer1 = prompt('Am I from Seattle?');
  console.log('Answer to Question 1 was ' + answer1);
  if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
    //alert('Nice! Memphis born and raised.');
    console.log(userName + ' nailed Question 1');
    pTagOne.textContent = 'Nice! Memphis born and raised';
  } else if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'YES') {
    //alert('Nope, ' + userName + ' !');
    pTagOne.textContent = 'Nope, ' + userName + ' !';
  } else {
    //alert('C\'mon now.. I said answer with Y or N');
  }
}
seattleHome();

var pTagTwo = document.getElementById('ans-two');

function beachWeather(answer) {
  if (answer.toLowerCase() === 'n' || answer.toUpperCase() === 'NO') {
    //alert('Not even close.');
    console.log(userName + ' incorrect answer');
    pTagTwo.textContent = 'Not even close';
  } else if (answer.toLowerCase() === 'y' || answer.toUpperCase() === 'YES') {
    //alert('You\'re awesome and correct.');
    console.log(userName + ' correct answer');
    pTagTwo.textContent = 'You\'re awesome and correct.';
  } else {
    //alert('You gotta follow the instructions now.');
  }
}
var answer2 = prompt('Do I like hot weather?');
beachWeather(answer2);


var pTagThree = document.getElementById('ans-three');

function outdoorsFan(answer) {
  //var answer3 = prompt('Am I outdoorsy?');
  if (answer.toLowerCase() === 'y' || answer.toUpperCase() === 'YES') {
    //console.log('Question 3 answer ' + answer3);
    //alert('Yep!');
    console.log(userName + ' correct answer again');
    pTagThree.textContent = 'Yep!';
  } else if (answer.toLowerCase() === 'n' || answer.toUpperCase() === 'NO') {
    //alert('Sorry, nope.');
    pTagThree.textContent = 'Sorry, nope.';
  } else {
    //alert('You are no fun today.');
  }
}
var answer3 = prompt('Am I outdoorsy?');
outdoorsFan(answer3);

var pTagFour = document.getElementById('ans-four');

function hasPet(answer) {
  console.log('Question 4 ' + answer4);
  if (answer.toLowerCase() === 'n' || answer.toUpperCase() === 'NO') {
    //alert('Wrongo.');
    pTagFour.textContent = 'Wrongo.';
  } else if (answer.toLowerCase() === 'y' || answer.toUpperCase() === 'YES') {
    //alert('You\'re good at this!');
    pTagFour.textContent = 'You\'re good at this!';
  } else {
    //alert('So, you\'re a comedian today.');
  }
}
var answer4 = prompt('Do I have a pet?');
hasPet(answer4);

var pTagFive = document.getElementById('ans-five');

function seafoodOpinion(answer) {
  console.log('the important question ' + answer5);
  if (answer.toLowerCase() === 'y' || answer.toUpperCase() === 'YES') {
    //alert('Dude! Pike Place Chowder is the bomb!');
    pTagFive.textContent = 'Dude! Pike Place Chowder is the bomb!';
  } else if (answer.toLowerCase() === 'n' || answer.toUpperCase() === 'NO') {
    //alert('You don\'t know me at all, sucka.');
  } else {
    pTagFive.textContent = 'You don\'t know me at all, sucka.';
    //alert('Lame-o.');
  }
}

var answer5 = prompt('Do I like seafood?');
seafoodOpinion(answer5);
