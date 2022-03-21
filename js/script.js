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
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    },

    //oggetto 2
    {
        nome: 'Giammarco Tocco',
        ruolo: 'magazziniere',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
     
    //oggetto 3
    {
        nome: 'Dario Moccia',
        ruolo: 'streamer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    
    //oggetto 4

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },

    //oggetto 5
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Manager',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
];

console.log(teamMembers);

// definisco gli oggetti con delle costanti

const edoMagro = teamMembers[0];

const agneseInno = teamMembers[1];

const giammaTocco = teamMembers[2];

const darioMoccia = teamMembers[3];

const angelaLopez = teamMembers[4];

const angelaCarrol = teamMembers[5];

// creo la carta di ognuno

const edoardoMagroCard = createCard(edoMagro);

const agneseInnoCard = createCard(agneseInno);

const giammaToccoCard = createCard(giammaTocco);

const darioMocciaCard = createCard(darioMoccia);

const angelaLopezCard = createCard(angelaLopez);

const angelaCarroCard = createCard(angelaCarrol);