//* Ejercicio 6



//* Ejercicio 7
/*
Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.
*/
/*
let numUsuario = 0 
while (numUsuario < 50 || numUsuario > 100) {
  numUsuario = prompt('Dime un número del 50 al 100.')
}


let numero
do {
  numero = prompt('Dime un número entre 50 y 100.')
} while (numero < 50 || numero > 100)
*/

//* Ejercicio 8
/*
En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola 
la tabla de multiplicar del número elegido.
*/
/*
let numero
do {
  numero = prompt('Dime un número del 2 al 10 que te digo su tabla de multiplicar.')
} while (numero < 2 || numero > 10 || isNaN(numero))

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`)
}

*/

//* Ejercicio 10
// Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:
const numeros = [1,9,3,8,5,7]
/*
    ****for*****
    2
    18
    6
    16
    10
    14
    ************
    *****for...of****
    2
    18
    6
*/

// for
console.log('********* FOR **********')
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] * 2)
}
console.log('************************')

// for...of

console.log('********* FOR...OF **********')
for (let numero of numeros) {
  console.log(numero * 2)
}
console.log('************************')

// for...in
console.log('********* FOR...IN **********')
for (let i in numeros) {
  console.log(numeros[i] * 2)
}
console.log('************************')


// while
console.log('********* WHILE **********')
let index = 0
while (index < numeros.length) {
  console.log(numeros[index] * 2)
  index++
}
console.log('**************************')



// do...while

console.log('********* DO...WHILE **********')
let indice = 0
do {
  console.log(numeros[indice] * 2)
  indice++
} while (indice < numeros.length)
console.log('******************************')