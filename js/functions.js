// FUNCTIONS
function createCard(memberObject) {
    
}

function crateContainers(containerOne, containerChild) {
    
}

function addAPhoto(memberPhoto) {
    // creo dei div figli all'interno del contenitore che divide i 3 parametri
const imageDiv = document.createElement('div');

// gli aggiungo una classe chiamata 'card-image'
imageDiv.className = 'card-image';

teamCardDiv.appendChild(imageDiv);

// creo l'elemento dell'immagine
const imageElement = document.createElement('img');

console.log(imageElement)

imageElement.src = memberPhoto;

// aggiungo all'interno del div l'immagine che serve

imageDiv.appendChild(imageElement);
    
    return imageDiv;
}