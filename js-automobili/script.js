

let automobili = [
    {
        marca : 'Fiat',
        modello : 'Panda',
        alimentazione : 'gpl'    
    },
    {
        marca : 'Fiat',
        modello : '500',
        alimentazione : 'benzina'    
    },
    {
        marca : 'Fiat',
        modello : '600',
        alimentazione : 'benzina'    
    },
    {
        marca : 'Fiat',
        modello : 'Uno',
        alimentazione : 'diesel'    
    },
    {
        marca : 'Fiat',
        modello : 'Tipo',
        alimentazione : 'gpl'    
    },
    {
        marca : 'Fiat',
        modello : 'Doblò',
        alimentazione : 'gpl'    
    },
    {
        marca : 'Fiat',
        modello : 'Fiorino',
        alimentazione : 'metano'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Golf',
        alimentazione : 'benzina'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Polo',
        alimentazione : 'gpl'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Passat',
        alimentazione : 'metano'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Tiguan',
        alimentazione : 'diesel'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Roc',
        alimentazione : 'benzina'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Touareg',
        alimentazione : 'elettrica'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Caddy',
        alimentazione : 'elettrica'    
    },
    {
        marca : 'Volkswagen',
        modello : 'Up',
        alimentazione : 'elettrica'    
    },
]

let benzina = [];

for (i=0; i < automobili.length; i++){
    if(automobili[i].alimentazione === 'benzina'){
        benzina.push(automobili[i]);
        
    }
}
console.log(benzina)

let diesel = []


automobili.forEach(element => {
    if(element.alimentazione === 'diesel'){
        diesel.push(element)
    }
});
console.log(diesel)

const altro = automobili.filter (car => automobili.alimentazione !== 'diesel' && automobili.alimentazione !== 'benzina')

console.log(altro)


/*



nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */