
const num = []
let sum = 0

while (sum < 50){
    let userNumber = parseInt(prompt('scrivi un numero'))
    num.push(userNumber)
    sum += userNumber
    console.log(sum)
}


