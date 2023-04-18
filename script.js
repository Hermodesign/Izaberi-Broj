'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (guess) {
    document.querySelector('.check').textContent = 'Igraj!';
  }
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Ovo nije broj!';
  } else if (guess != number) {
    document.querySelector('.message').textContent =
      guess < number ? '❗ Broj je veci!' : 'Broj je manji!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score == 0) {
    document.querySelector('.message').textContent = `🛑 Izgubili ste!`;
    document.querySelector('.number').textContent = number;
  } else {
    document.querySelector('.message').textContent = `🎉 Bravo! Pogodili ste!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
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
