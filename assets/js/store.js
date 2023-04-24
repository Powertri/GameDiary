import data from './data.js';

const carousel = document.getElementById('carousel');
var allElements = [];

data.allLoadedGames.forEach((eachLoadedGame) => {

  let html = '';
  for (var i = 0; i < 5; i++) {
    if (eachLoadedGame.rate > i) {
      html = html + '<span class="fa fa-star checked"></span>';
    } else {
      html = html + '<span class="fa fa-star"></span>';
    }
 }
 console.log(html);
  const newElement = `
    <li class="card">
    <div class="card-image">
      <img src="${eachLoadedGame.image}" />
    </div>
    <div onClick="putInGameInformationCard(this.id)" class="card-info" id="${eachLoadedGame.idReference}">
      <h4>${eachLoadedGame.title}</h4>
      <div class="star-rating">
        ${html}
      </div>
      <p>${eachLoadedGame.shortReview}</p>
    </div>
  </li>
  `

  allElements.push(newElement);
});

carousel.innerHTML = allElements;
