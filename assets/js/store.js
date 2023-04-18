class Game {
  constructor(title, image, rate, description, idReference) {
    this.title = title;
    this.image = image;
    this.rate = rate;
    this.description = description;
    this.idReference = idReference;
  }
}

const redDeadRedemption = new Game('Red Dead Redemption', './assets/images/Red_Dead_Redemption_capa.png', 5, 'aaaaa', 'redDeadRedemption');
const theSims4 = new Game('The Sims 4', 'teste', 5, 'aaaaa');
const cyperPunk = new Game('Cyper Punk', 'teste', 5, 'aaaaa');

const allGames = [redDeadRedemption, theSims4, cyperPunk];

function putInGameInformationCard(game) {
  const image = document.getElementById('game-information-img').querySelector('#game-information-img img');
  const divTitle = document.getElementById('game-information-title');
  const divDescription = document.getElementById('game-information-description');
  image.setAttribute('src', game.image);
  divTitle.innerText = game.title;
  divDescription.innerText = game.description;
}

function showGame(id) {
  allGames.forEach((eachGame) => {
    if (eachGame.idReference == id) {
      console.log('caiu')
      putInGameInformationCard(eachGame);
    }
  })
}

