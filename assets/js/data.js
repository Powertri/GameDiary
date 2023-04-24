 const raw = [
    {
        title: "Red Dead Redemption",
        idReference: "redDeadRedemption",
        image: "../assets/images/redDeadRedemption.png",
        shortReview: "Ótimo jogo!",
        review: "Ótimo jogo!",
        rate: 1,
    },
    {
        title: "The Sims 4",
        idReference: "theSims4",
        image: "../assets/images/theSims4.png",
        shortReview: "Ótimo jogo!",
        review: "Ótimo jogo!",
        rate: 2,
    },
    {
        title: "Spider Man",
        idReference: "spiderMan",
        image: "../assets/images/spiderMan.jpg",
        shortReview: "Ótimo jogo!",
        review: "Ótimo jogo!",
        rate: 3,
    },
    {
        title: "Horizon Zero Dawn",
        idReference: "horizonZeroDawn",
        image: "../assets/images/horizonZeroDawn.png",
        shortReview: "Ótimo jogo!",
        review: "Ótimo jogo!",
        rate: 5,
    },
    {
      title: "Cyperpunk 2077",
      idReference: "cyperpunk2077",
      image: "../assets/images/cyperpunk77.png",
      shortReview: "Ótimo jogo!",
      review: "Ótimo jogo!",
      rate: 5,
  },

 ]

class Game {
  constructor(title, image, rate, shortReview,  review, idReference) {
    this.title = title;
    this.image = image;
    this.rate = rate;
    this.shortReview = shortReview;
    this.review = review;
    this.idReference = idReference;
  }
}

let allLoadedGames = raw.map((eachGame) => {
  return new Game(eachGame.title, 
    eachGame.image, 
    eachGame.rate, 
    eachGame.shortReview, 
    eachGame.review, 
    eachGame.idReference
    );
})

localStorage.setItem('games', JSON.stringify(allLoadedGames));

export default { allLoadedGames };