function saudacao()
{
    var carouselDocumentElement = document.getElementById("carousel"); 
    var liDocumentElement = carouselDocumentElement.getElementsByTagName("li"); 
    for (var i = 0; i < liDocumentElement.length - 1; i++) {
        console.log(' teste')
        carouselDocumentElement.appendChild(liDocumentElement[i]);
    }
}