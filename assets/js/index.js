const carouselDocumentElement = document.getElementById("carousel");

function putInGameInformationCard(game) {
  // getting information
  const games = JSON.parse(localStorage.getItem("games"));
  const selectedGame = games.filter(
    (eachGame) => eachGame.idReference === game
  )[0];
  document
    .getElementById("game-information").style.display = "initial";
  const image = document
    .getElementById("game-information-img");
  const divTitle = document.getElementById("game-information-title");
  const divDescription = document.getElementById(
    "game-information-description"
  );
  const divRate = document.getElementById(
    "game-information-rate"
  );

  console.log(selectedGame)
  image.setAttribute("src", selectedGame.image);
  divTitle.innerText = selectedGame.title;
  divDescription.innerText = selectedGame.review;
  let html = '';
  for (var i = 0; i < 5; i++) {
    if (selectedGame.rate > i) {
      html = html + '<span class="fa fa-star checked"></span>';
    } else {
      html = html + '<span class="fa fa-star"></span>';
    }
 }
 divRate.innerHTML = html;
}

function nextImage() {
  let firstChild = carouselDocumentElement.children[0];
  lastChildIndex = carouselDocumentElement.children.length;
  let lastChild = carouselDocumentElement.children[lastChildIndex - 1];
  carouselDocumentElement.removeChild(lastChild);
  carouselDocumentElement.insertBefore(lastChild, firstChild);
}

function lastImage() {
  let firstChild = carouselDocumentElement.children[0];
  carouselDocumentElement.removeChild(firstChild);
  carouselDocumentElement.appendChild(firstChild);
}
