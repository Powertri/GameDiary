function nextImage()
{
    var carouselDocumentElement = document.getElementById("carousel"); 
    var liDocumentElement = carouselDocumentElement.getElementsByTagName("li"); 
    for (var i = 0; i < liDocumentElement.length - 1; i++) {
        console.log(liDocumentElement[i])
        carouselDocumentElement.appendChild(liDocumentElement[i]);
    }
}