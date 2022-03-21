console.log('JS OK!')

/*Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
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
const cardsContainer = document.querySelector('.team-card');


// creo un array di oggetti che rappresentano ogni membro del team

const teamMembers = [
    //oggetto 0
    {
        nome: 'Sandro',
        ruolo: 'Manager',
        foto: 'image-1'
    },

    //oggetto 1
    {
        nome: 'Luisa',
        ruolo: 'impiegata',
        foto: 'image-2'
    },

    //oggetto 2
    {
        nome: 'Marina',
        ruolo: 'magazziniera',
        foto: 'image-3'
    },
     
    //oggetto 3
    {
        nome: 'Dario',
        ruolo: 'streamer',
        foto: 'image-4'
    }
     
];

console.log(teamMembers);