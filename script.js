'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Ovo nije broj!';
  } else if (number > guess) {
    if (score !== 0) {
      document.querySelector('.message').textContent = `❗ Broj je veci!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (number < guess) {
    if (score !== 0) {
      document.querySelector('.message').textContent = `❗ Broj je manji!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  if (score === 0) {
    document.querySelector('.message').textContent = `🛑 Izgubili ste!`;
    document.querySelector('.number').textContent = number;
  } else if (number == guess) {
    document.querySelector('.message').textContent = `🎉 Bravo! Pogodili ste!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = number;

    if (number == guess && score > guess && number == guess) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  let check = document.querySelector('.check').textContent;
  console.log(check);
  if (check) {
    document.querySelector('.check').textContent = 'Igraj!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Pogodi broj!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Izaberi!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
