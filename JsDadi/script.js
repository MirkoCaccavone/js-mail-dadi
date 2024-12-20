// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genera un numero random da 1 a 6 per il giocatore
let numeroUser = Math.floor(Math.random() *6) +1;

// genera un numero random da 1 a 6 per il computer
let numeroCpu = Math.floor(Math.random() *6) +1;

console.log("ti è uscito il numero",numeroUser);
console.log("al Cpu è uscito il numero",numeroCpu);


// variabile per il messaggio del vincitore
let messaggioVincitore = ("hai vinto");

// stabilire chi vince in base al numero più alto
if (numeroUser > numeroCpu){
    messaggioVincitore;

}else if (numeroUser < numeroCpu){
    messaggioVincitore = ("hai perso");
}else{
    messaggioVincitore = ("avete pareggiato")
}
    
// output per il vincitore

console.log(messaggioVincitore);
