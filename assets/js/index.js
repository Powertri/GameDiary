
function nextImage() {
    let carouselDocumentElement = document.getElementById("carousel");
    console.log(carouselDocumentElement.children[0]);
    let firstChild = carouselDocumentElement.children[0];
    lastChildIndex = carouselDocumentElement.children.length;
    let lastChild = carouselDocumentElement.children[lastChildIndex - 1];
    carouselDocumentElement.removeChild(lastChild);
    carouselDocumentElement.insertBefore(lastChild, firstChild);

    carouselDocumentElement.children[0].animate(  [
        { 
        marginLeft: '0%',
    },
        { 
        marginLeft: '80%',
        }
      ],
      {
        duration: 4000     
     })


    carouselDocumentElement.animate(  [
        { 
        marginLeft: '80%',
    },
        { 
        marginLeft: '0%',
        }
      ],
      {
        duration: 400     
     })


   
}

function lastImage() {
    let firstChild = carouselDocumentElement.children[0];
    carouselDocumentElement.removeChild(firstChild);
    carouselDocumentElement.appendChild(firstChild);
}