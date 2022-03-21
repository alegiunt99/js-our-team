// FUNCTIONS
function createCard(memberObject) {
    // creo un div dove inserire la card
    const teamCardDiv = document.createElement('div');

    teamCardDiv.classList.add('team-card');

    // lo inserisco nel container della card
    cardsContainer.appendChild(teamCardDiv);

    addAPhoto(teamCardDiv, memberObject);

    createCardText(teamCardDiv, memberObject);
}

function createCardText(teamDiv, memberValues) {
    const cardTextDiv = document.createElement('div');

    console.log(cardTextDiv);
    // aggiungo la classe 
    cardTextDiv.className = 'card-text';

    // aggiungo questo div al container della card
    teamDiv.appendChild(cardTextDiv);
    
    //        - NOME

    addMemberName(cardTextDiv, memberValues);

    //         - RUOLO

    addMemberWork(cardTextDiv, memberValues)

    return cardTextDiv;
}

function addMemberName(textDiv, worker) {
    // aggiungo un h3 in cui aggiungero il valore del nome dei membri
    const nameTitle = document.createElement('h3');

    nameTitle.innerText = worker.nome;

    textDiv.appendChild(nameTitle);

    return nameTitle;

}

function addMemberWork(textDiv, employer) {
    //creo un paragrafo in cui inserirò il Ruolo del membro

    const workCardText = document.createElement('p');

    workCardText.innerText = employer.ruolo; 

    // aggiungo il paragrafo al div del testo della card

    textDiv.appendChild(workCardText);

    return workCardText;

}

function addAPhoto(teamCardDiv, member) {
    // creo dei div figli all'interno del contenitore che divide i 3 parametri
    const imageDiv = document.createElement('div');

    // gli aggiungo una classe chiamata 'card-image'
    imageDiv.className = 'card-image';

    teamCardDiv.appendChild(imageDiv);

    // creo l'elemento dell'immagine
    const imageElement = document.createElement('img');

    console.log(imageElement)

    imageElement.src = member.foto;

    // aggiungo all'interno del div l'immagine che serve

    imageDiv.appendChild(imageElement);
        
    return imageDiv;
}