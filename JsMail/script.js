// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email



// creare un array con le mail
const listaMail = [
    "utente1@gmail.com",
    "utente2@gmail.com",
    "utente3@gmail.com",
    "utente4@gmail.com",
    "utente5@gmail.com",
    "utente6@gmail.com",
    "utente7@gmail.com",
    "utente8@gmail.com",
];
console.log(listaMail);

// inserimento mail da parte dell'utente
let mailUtente = prompt("inserisci la tua mail");
console.log(mailUtente);


// variabile mail corretta
let mailCorretta = false;


// ciclo per controllare se la mail è nella lista
for (let i = 0; i <= listaMail.length; i++){

    if(listaMail[i] === mailUtente){
        mailCorretta = true;
    }
}

// messaggio di output con messaggio se può accedere o no

   if (mailCorretta === true) {
    console.log("benvenuto alla fasta", mailUtente);

   }else{
    console.log("non puoi accedere alla festa", mailUtente);
    
}
