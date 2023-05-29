// ? Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//  ?   Codice giocatore
//   ?  Nome
//  ? Cognome
//  ?   Età
//  ?   Media punti fatti per partita
//  ?   Percentuale di successo per tiri da 3 punti
//  ?   Stoppate 
//  ?  Tiri 

//  ! Generare casualmente le statistiche di gioco, secondo queste regole:
//  !   il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//  !   la media punti fatti per partita deve essere compresa tra 0 e 50
//  !   la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//  !   le stoppate sono un numero intero compresot ra 0 e 30
//  !   i tiri sono un numero intero compreso tra 20 e 100

const basketballPlayer = {
    playerCode : makeid(3, 'QWERTYUIOPASDFGHJKLZXCVBNM') + randomNumber(0,9,1) + randomNumber(0,9,1) + randomNumber(0,9,1),
    playerName : 'Russel' ,
    playerLastName : 'Westrook' ,
    age : 34 ,
    averagePoints : randomNumber(0, 50, 1) ,
    threePointsSucces : randomNumber(0, 100, 1) + '%',
    blocks : randomNumber(0, 30, 1),
    shots : randomNumber(20, 100, 1) ,
}

console.log(basketballPlayer)



function makeid(length, allowedChars) {
    let result = '';
    let counter = 0;
    while (counter < length) {
        result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
        counter ++;
    }
    return result;
}




function randomNumber (minNumber , maxNumber, numElements){
    const generatedNUmbers = []
    if((maxNumber - minNumber) < numElements){
        return false
    }
    while (generatedNUmbers.length < numElements){
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
        if(!generatedNUmbers.includes(randomNumber)){
            generatedNUmbers.push(randomNumber)
        }
    }
    return generatedNUmbers
}