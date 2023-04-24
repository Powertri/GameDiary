const carouselDocumentElement = document.getElementById("carousel");

function putInGameInformationCard(game) {
  // getting information
  const games = JSON.parse(localStorage.getItem("games"));
  const selectedGame = games.filter(
    (eachGame) => eachGame.idReference === game
  )[0];
  const image = document
    .getElementById("game-information-img");
  const divTitle = document.getElementById("game-information-title");
  const divDescription = document.getElementById(
    "game-information-description"
  );

  const star = document.getElementsByClassName("star-rating")[0].getElementsByClassName('fa');


  // setting
  image.setAttribute("src", selectedGame.image);
  divTitle.innerText = selectedGame.title;
  divDescription.innerText = selectedGame.review;
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
