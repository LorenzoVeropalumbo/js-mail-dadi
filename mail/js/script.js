// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Email registrate
const arrayEmail = ['lorenzo@gmail.com','Andrea@gmail.com','Paolo@gmail.com','Letizia@gmail.com',
'Giorgio@gmail.com','Antonella@gmail.com', 'alessia@gmail.com'];

// Preparo le variabili
const sendBtn = document.getElementById('send-btn');
let emailFound = false;

// Al click sul button salvo l'email del utente e inizio a compapare le email 
sendBtn.addEventListener('click',
    
  function() {

    // Salvo l'email del utente 
    let userEmail = document.getElementById('email-address').value;

    // Inizio a scorrere le email che ho registrate
    for (let i = 0; i < arrayEmail.length; i++){
  
      const emailList = arrayEmail[i];

      // Controllo se un email è uguale a quella che mi è stata data dall'utente
      if(userEmail === emailList){
        emailFound = true;
      }
    };

    // Conunico se è stata trovata o no
    if(emailFound){
      console.log("Email già registrata");
      document.getElementById('user-message').innerHTML = "Email già registrata";
      userEmail = '';
      emailFound = false;
    }
    else{

      userEmail = '';
      document.getElementById('user-message').innerHTML = "Email non registrata";
    }
  }
);