/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */





const parole = ['pippO', 'PluTI', 'mwsjndjNjnnS', 'ArmsANdo', 'bodyguarD', 'gaianclu','AnkaRA']

for (let index = 0; index < parole.length; index++) {
    const parola = parole[index];
    let result = parola.charAt(0).toUpperCase() + parola.substring(1).toLowerCase()
    console.log(result)
}

for (let index = 0; index < parole.length; index++) {
    const parola = parole[index];
    console.log(endCaseWords(parola))
}



function endCaseWords(input) {
    return input.toLowerCase().split(" ").map(function(item) {
        return item.slice(0, -1) + item.slice(-1).toUpperCase();
    }).join(" ");
}
