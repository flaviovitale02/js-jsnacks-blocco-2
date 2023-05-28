


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