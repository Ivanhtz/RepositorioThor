// Bucles 01.
// Crea un bucle que imprima por consola la lista de números del 1 al 30, incrementándose
// de 3 en 3.

for (let i = 0; i <= 30; i+=3) {
    console.log (i)
}


// Bucles 02.
// Utiliza un bucle for para imprimir por la consola la tabla de multiplicar del 8.
let numero = prompt ('Ingrese el número que desee multiplicar')
for (let i = 0; i <= 10; i++) {
    console.log (`${numero} x ${i} = ${numero * i}`)
    }

// Bucles 03.
// Escribe un programa que saque una lista de números del 1 al 20 y que indique si el
// número es par o impar.

 for (let i = 1; i <= 20; i++ ) {
    if(i%2 ===0){
        console.log (`${i} es Par`);
    } else {
         console.log (`${i} es Impar`)
    }
    }

// Bucles 04.
// Haz un programa que pida una frase al usuario. Utilizando un for...of imprimiremos
// el número total de letras "a" que haya en la frase.

const frase = prompt ('Ponga aquí una frase')
letraA = 0
 for (letraA of frase) {
    if (letraA === "a") {
        letraA++;
    } console.log (`El número de letras A, es de ${letraA}`)
   }

// Bucles 05.

// Escribe un programa que muestre los números del 1 al 50, con las siguientes
// excepciones:
// Para los múltiplos de 3, muestra en pantalla la palabra "Fizz" en lugar del número.

// Para los números múltiplos de 5, muestra en pantalla la palabra "Buzz" en lugar del
// número.
// Para los múltiplos de 3 y 5, muestra en pantalla la palabra "FizzBuzz" en lugar del
// número

for (let i=1; i<=50; i++) {
    if (i % 3 === 0){
    console.log ("Fizz")}
 else if (i % 5 === 0) {
    console.log ("Buzz")}
 else if ( i%5 && i%3) {
    console.log ("FizzBuzz") }

 else {console.log (i)}
}

