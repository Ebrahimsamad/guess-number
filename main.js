'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer! 🤞';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;
// document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ! ⛔';
    displayMessage('No Number ! ⛔');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Answer! 🤞';
    displayMessage('Correct Answer! 🤞');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (guess > highscore) {
      highscore = guess;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? ' 📈 Too High ! ' : '📉 Too Low !';
      displayMessage(guess > secretNumber ? ' 📈 Too High ! ' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     'You Lost The Game ! ⛔ ';
      displayMessage('You Lost The Game ! ⛔ ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📈 Too High ! ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You Lost The Game ! ⛔ ';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low !';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You Lost The Game ! ⛔ ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});
