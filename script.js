'use strict'

let number = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

function prikaziPoruku(message) {
  return (document.querySelector('.message').textContent = message)
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value
  if (guess) {
    document.querySelector('.check').textContent = 'Igraj!'
  }
  if (!guess) {
    prikaziPoruku('❌ Ovo nije broj!')
  } else if (guess != number) {
    prikaziPoruku(guess < number ? '❗ Broj je veci!' : 'Broj je manji!')
    score--
    document.querySelector('.score').textContent = score
  } else if (score == 0) {
    prikaziPoruku(`🛑 Izgubili ste!`)
  } else {
    prikaziPoruku(`🎉 Bravo! Pogodili ste!`)
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '50rem'
    document.querySelector('.number').textContent = number
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  number = Math.trunc(Math.random() * 20) + 1
  prikaziPoruku('Pogodi broj!')
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score
  document.querySelector('.guess').value = ''
  document.querySelector('.check').textContent = 'Izaberi!'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
