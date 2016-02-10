// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.

var userName = prompt('What is your name?');
console.log('Their name is ' + userName);

alert('Hey y\'all, and hey ' + userName + ', Let\'s get to know each other. I\'m going to ask you some questions about me. Please answer Y or N.');

var answer1 = prompt('Am I from Seattle?');
console.log('Answer to Question 1 was ' + answer1);
if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
  alert('Nice! Memphis born and raised.');
  console.log(userName + ' nailed Question 1');
} else if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() ==='YES') {
  alert('Nope!!! ' +userName);
} else {
  alert('C\'mon now.. I said answer with Y or N');
}
