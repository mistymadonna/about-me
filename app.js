// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer

var userName = prompt('What is your name?');
console.log('Their name is ' + userName);

alert('Hey y\'all, and hey ' + userName + ', Let\'s get to know each other. I\'m going to ask you some questions about me. Please answer Y or N. Here we go!');

var pTagOne = document.getElementById("ans-name");

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
    alert('C\'mon now.. I said answer with Y or N');
  }
}
function beachWeather() {
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
}
function outdoorsFan() {
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
}
function hasPet() {
  var answer4 = prompt('Do I have a pet?');
  console.log('Question 4 ' + answer4);
  if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'NO') {
    alert('Wrongo.');
  } else if (answer4.toLowerCase() === 'y' || answer4.toUpperCase() === 'YES') {
    alert('You\'re good at this!');
  } else {
    alert('So, you\'re a comedian today.');
  }
}
function seafoodOpinion() {
  var answer5 = prompt('Do I like seafood?');
  console.log('the important question ' + answer5);
  if (answer5.toLowerCase() === 'y' || answer5.toUpperCase() === 'YES') {
    alert('Dude! Pike Place Chowder is the bomb!');
  } else if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'NO') {
    alert('You don\'t know me at all, sucka.');
  } else {
    alert('Lame-o.');
  }
}
