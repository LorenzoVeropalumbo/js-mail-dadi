// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creazione dadi


const playBtn = document.getElementById('play-btn');

// Al click 
playBtn.addEventListener('click',
    
  function() {

    const UserDice = Math.floor(Math.random() * 6) + 1;
    const PcDice =  Math.floor(Math.random() * 6) + 1;
    const diceResult = document.getElementById('user-dice');
    const userMessage = document.getElementById('user-message');

    if (UserDice > PcDice) {
      
      diceResult.innerHTML = `il tuo risultato è ${UserDice}   il tuo avversaio ha fatto ${PcDice}`;
      userMessage.innerHTML = "Hai Vinto";

    } else if (UserDice < PcDice) {
      
      diceResult.innerHTML = `il tuo risultato è ${UserDice}   il tuo avversaio ha fatto ${PcDice}`;
      userMessage.innerHTML = "Hai Perso";
    }
    else {
      
      diceResult.innerHTML = `il tuo risultato è ${UserDice}   il tuo avversaio ha fatto ${PcDice}`;
      userMessage.innerHTML = "Parità";
    }
  }
);