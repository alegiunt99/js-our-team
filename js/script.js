console.log('JS OK!')

/*Aggiungere un file js in cui definire *un array di oggetti* che rappresentano 
i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa 
card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente
di aggiungere nuovi membri del team: 
cliccando sul pulsante "add" viene creato un *nuovo oggetto*,
il quale viene *inserito nell'array iniziale* 
e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
 */

//per prima cosa prendo il container delle card
const cardsContainer = document.querySelector('.team-container');


// creo un array di oggetti che rappresentano ogni membro del team

const teamMembers = [
    //oggetto 0
    {
        nome: 'Edoardo Magro',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },

    //oggetto 1
    {
        nome: 'Agnese Innocenti',
        ruolo: 'impiegata',
        foto: 'image-2'
    },

    //oggetto 2
    {
        nome: 'Giammarco Tocco',
        ruolo: 'magazziniera',
        foto: 'image-3'
    },
     
    //oggetto 3
    {
        nome: 'Dario Moccia',
        ruolo: 'streamer',
        foto: 'image-4'
    }
     
];

console.log(teamMembers);

// definisco gli oggetti con delle costanti

const edoMagro = teamMembers[0];

const agneseInno = teamMembers[1];

const giammaTocco = teamMembers[2];

const darioMoccia = teamMembers[3];

// una volta definiti i membri all'interno dell'array,
// usando le informazioni inserite le aggiungo all'html per creare la card

// creo un div dove inserire la card


// **************************     IMMAGINE      **************************
const teamCardDiv = document.createElement('div');

teamCardDiv.classList.add('team-card');

// lo inserisco nel container della card
cardsContainer.appendChild(teamCardDiv);

// creo dei div figli all'interno del contenitore che divide i 3 parametri
const imageCardDiv = addAPhoto(edoMagro.foto);


// *******************      TESTO       *******************

// creo un secondo div dove inserirò il nome e il mestiere
const cardTextDiv = document.createElement('div');

console.log(cardTextDiv);
// aggiungo la classe 
cardTextDiv.className = 'card-text';

// aggiungo questo div al container della card
teamCardDiv.appendChild(cardTextDiv);

//        - NOME

// aggiungo un h3 in cui aggiungero il valore del nome dei membri
const nameTitle = document.createElement('h3');

nameTitle.innerText = edoMagro.nome;

cardTextDiv.appendChild(nameTitle);

//         - RUOLO

//creo un paragrafo in cui inserirò il Ruolo del membro

const workCardText = document.createElement('p');

workCardText.innerText = edoMagro.ruolo; 

// aggiungo il paragrafo al div del testo della card

cardTextDiv.appendChild(workCardText);




