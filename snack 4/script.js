word1 = prompt('Scrivi una parola')
word2 = prompt("Scrivi un'altra parola")

if(wordLength (word1, word2)){
    console.log('Le parole sono lunghe uguali')
}else if(word1.length > word2.length){
    console.log('La prima parola è più lunga')
}else{
    console.log('La seconda parola è più lunga')
}

function wordLength (firstWord, secondWord){
    if(firstWord.length === secondWord.length){
        return true
    }else{
        return false
    }
}

