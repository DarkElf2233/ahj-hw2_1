const holeGame = document.querySelector('.hole-game');
let holeWithGoblin = holeGame.querySelector('.hole_has-goblin');

function getRandomNum(currentNum) {
  let randomNum = Math.ceil(Math.random() * 16);
  while (randomNum === currentNum) {
    randomNum = Math.ceil(Math.random() * 16);
  }
  return randomNum;
}

setInterval(() => {
  const randomNum = getRandomNum(holeWithGoblin.dataset.id);
  holeWithGoblin.classList.remove('hole_has-goblin');
  holeWithGoblin = holeGame.querySelector(`[data-id="${randomNum}"]`);
  holeWithGoblin.classList.add('hole_has-goblin');
}, 800);
