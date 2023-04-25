 const raw = [
    {
        title: "Red Dead Redemption",
        idReference: "redDeadRedemption",
        image: "assets/images/redDeadRedemption.png",
        shortReview: "Obra de arte completa.",
        review: "Red Dead Redemption 2 consegue superar todas as expectativas e chega como um dos melhores jogos de todos os tempos. Com uma proposta ousada e bem executada de criar uma imersão nunca antes vista em um game, o título faz com que o jogador se sinta dentro do coração dos EUA, junto com um trabalho que leva o visual do título para um novo patamar. O game mostra que não é preciso óculos de realidade virtual ou acessórios do tipo para imergir em um jogo de uma forma tão única, divertida e natural. E que a Rockstar a partir de hoje fique conhecida não mais como a produtora de GTA , mas sim como a empresa responsável por Red Dead Redemption.",
        rate: 5,
    },
    {
        title: "The Sims 4",
        idReference: "theSims4",
        image: "assets/images/theSims4.png",
        shortReview: "Entrega o esperado.",
        review: "The Sims 4 é uma versão melhorada de The Sims 3, acrescentando novas opções de personalização e emoções que realmente influenciam a jogabilidade. Ele traz inovações consideráveis como o seu editor, a nova forma de controlar a vizinhança e o novo sistema de desejos e emoções. O equilíbrio desses detalhes com uma melhor performance do jogo, novas opções de interação e compartilhamento fazem de The Sims 4 mais um excelente simulador da série.",
        rate: 3,
    },
    {
        title: "Spider Man",
        idReference: "spiderMan",
        image: "assets/images/spiderMan.jpg",
        shortReview: "Divertido e fiel à obra.",
        review: "Spider-Man é um título que supera as expectativas e chega não apenas como um dos melhores jogos de heróis, mas como um forte candidato a game do ano. Apostando em um mundo aberto repleto de referências ao universo do personagem nos quadrinhos, e uma jogabilidade que cai como uma luva para o herói, o game se une a títulos como God of War e Uncharted se tornando um grande motivo para se ter um PS4, além de ser obrigatório para os fãs do amigão da vizinhança.",
        rate: 4,
    },
    {
        title: "Horizon Zero Dawn",
        idReference: "horizonZeroDawn",
        image: "assets/images/horizonZeroDawn.png",
        shortReview: "Gráficos impressionantes.",
        review: "Horizon Zero Dawn é mais um título exclusivo do PS4 que justifica a compra do console. Com um visual incrivelmente detalhado e um enredo repleto de reviravoltas que prende o jogador em longos diálogos, os problemas de jogabilidade não comprometem o resultado final dessa obra prima que tem tudo para ser a nova galinha dos ovos de ouro da Sony.",
        rate: 5,
    },
    {
      title: "Cyperpunk 2077",
      idReference: "cyperpunk2077",
      image: "assets/images/cyperpunk77.png",
      shortReview: "Ótima história, péssima execução",
      review: "Cyberpunk 2077 não deveria ter sido lançado em 2020. A CD Projekt Red deveria ter, mais uma vez, adiado o lançamento, para poder trabalhar melhor no polimento do game (preferencialmente, sem forçar seus funcionários a vivenciar jornadas abusivas de trabalho, como foi denunciado). Além disso, teria sido de bom tom se, ao longo do período de divulgação, a desenvolvedora tivesse mostrado aos jogadores como o título rodaria em plataformas mais antigas, como o próprio PS4, por exemplo. O título, no entanto, vale a pena ser jogado pelo seu enredo, pela sua trilha sonora e pelas reflexões que, mesmo sem querer, acaba levantando. A baixa quantidade de customizações decepciona, mas em contraste, a quantidade de finais possíveis agrada. Cyberpunk 2077 é definitivamente um game divertido, com campanha principal interessante e missões paralelas legais, mas que acabou prejudicado pela falta de polimento em sua versão final.",
      rate: 2,
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