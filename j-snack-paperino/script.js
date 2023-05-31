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
    let result = parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase()
    console.log(result)
}


