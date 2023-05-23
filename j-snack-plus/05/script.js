
const ulElement = document.querySelector ('ul')
let liElement

for(let i = 0; i < 8; i++){
    createLi();
    ulElement.appendChild(liElement)
}







function createLi(){
    liElement = document.createElement('li')
    liElement.innerHTML = prompt('Scrivi elemento della spesa')

    return liElement
}

