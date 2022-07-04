const rnd = Math.floor((Math.random() * 50) + 1)



for (i = 6 ; i > 0 ; i = i -1) {

    const num = Number(prompt(`Dime un numero entre el 1 y el 50, tienes ${i} intentos`))

    if (num < 1 || num > 50) {
        console.log(`El numero no es valido, te quedan ${i - 1}`)
    } else if (isNaN(num)) {
        console.log(`El numero no es valido, te quedan ${i - 1}`) 
    } else if ( rnd < num) {
        console.log(`el numero secreto es menor que ${num}`)
    } else if (rnd > num) {
        console.log(`el numero secreto es mayor que ${num}`) 
    } else {
        console.log(`has ganado el numero secreto era ${num}`)
        break
    }
}

console.log("el juego a terminado")