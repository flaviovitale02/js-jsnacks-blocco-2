/** Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.*/

let numeroCasuale = Math.floor(Math.random() * 99 + 1)

let userGuess = parseInt(prompt('Scrivi un numero'))
let userTry = 0

while(userGuess !== numeroCasuale){
    if(userGuess < numeroCasuale){
        console.log('Il numero da indovinare è più grande')
        userGuess = parseInt(prompt('Scrivi un numero'))
    }
    else{
        console.log('Il numero da indovinare è più piccolo')
        userGuess = parseInt(prompt('Scrivi un numero'))
    }
    userTry ++
}

console.log('hai indovinato in: '+userTry+ ' tentativi')