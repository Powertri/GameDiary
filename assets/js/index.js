
function nextImage() {
    let carouselDocumentElement = document.getElementById("carousel");
    console.log(carouselDocumentElement.children[0]);
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