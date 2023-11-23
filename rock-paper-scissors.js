let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}

updateScoreElement();

/*if(!score) {
score = {
  wins: 0,
  loses: 0,
  ties: 0
}
}*/

console.log(score);

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'rock'){
  if(computerMove === 'rock'){
    result = 'Tie';
  } else if (computerMove === 'paper'){
    result = 'You Lose.'
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
} else if (playerMove === 'paper'){
  if(computerMove === 'rock'){
    result = 'You win.';
  } else if (computerMove === 'paper'){
    result = 'Tie.'
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
} else{
  if(computerMove === 'rock'){
    result = 'You lose.';
  } else if (computerMove === 'paper'){
    result = 'You win.'
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
}

if (result === 'You win.'){
  score.wins +=1;
} else if(result === 'You lose.'){
  score.loses +=1;
}else{
  score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result').innerHTML = result;


document.querySelector('.js-moves').innerHTML = `You
<img src="icons/${playerMove}-emoji.png" class="emoji">
<img src="icons/${computerMove}-emoji.png" class="emoji">
Computer`;



}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
}


function pickComputerMove() {
const randomNumber= Math.random();

let computerMove = '';

if(randomNumber >= 0 && randomNumber <1/3){
  computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
  computerMove = 'paper';
} else {
  computerMove = 'scissors';
}

return computerMove;
}