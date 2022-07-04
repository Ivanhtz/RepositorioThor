// Métodos Arrays y Math 01.
// Escribe un programa que pida un número mayor que 1 y que devuelva si el número es
// primo o no.
// Un número es primo si SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1

// Métodos Arrays y Math 02.
// Crea 3 arrays:
// El primero tendrá 5 números.

// const numeros = [5, 12, 18, 19, 28]

// // El segundo se llamará pares y el tercero impares . Ambos estarán vacíos.
// const pares = []
// const impares = []
// // Multiplica cada uno de los números del primer array por un número aleatorio entre 1
// // y 10:
// for (let i=0; i<numeros.length;i++);
// const random = Math.ceil(Math.random()*10)
// const result = nums[i] * random
// console.log.apply(`${nums[i]} x ${random} = ${nums[i] * random}`)

// if (result % 2 ===0) {
//     pares.push(result)
// }else {
//     impares.push (result)

    
// }

// console.log ('Pares -->', even)
// console.log ('Impares -->', odd)


// Si el resultado es par, guarda ese número en el array de pares y si es impar en
// el otro.
// Mostrar por consola:
// La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
// El array de pares e impares.


// Métodos Arrays y Math 03.

// Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya
// escribiendo.
// Imprime el array por consola.
// Cuando acabe, suma el total de todos los números.
// Imprime en consola la suma total, la raíz cuadrada del total y también éste último
// pero redondeado al alta.
// const number = [];

// for (let i=0; i<5; i++) {
//     number[i] = Number(prompt(`Introduce aquí un número ${i + 1}:`))
// }

// console.log (number)

 
// const suma = number.reduce ((accumulator, current) => accumulator + current)

// console.log (suma)

// const raizCuadrada = Math.sqrt (suma)
// console.log (raizCuadrada)

// const redondeo = Math.ceil (raizCuadrada)
// console.log (redondeo)


// Métodos Arrays y Math 04.
// Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos
// incluidos).
// Luego elimina del array todos los números pares y en lugar de ellos ponemos el string
// "los impares molan" .

const aleatorio = []
 for(let i=0; i<=10; i++) {
aleatorio[i]=0
const array = Math.round(Math.random() * (33 - 23 + 1) + 23);
console.log (array)
 }

 for (let i = 0; i < aleatorio.length; i++) {
    if (aleatorio[i] % 2 === 0) {
      aleatorio[i] = "Los impares molan";
    }
  }
 console.log(aleatorio);

//  / Métodos Arrays y Math 05.
// Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.
// Elimina todas las vocales de la frase y imprime la nueva frase por consola como un
// string.

const frase = prompt("Introduce aquí una frase");

const array = frase.split("");

console.log(array);

for (let i = 0; i < array.length; i++) {
  if (
    array[i] === "a" ||array[i] === "e" ||array[i] === "i" ||array[i] === "o" ||array[i] === "u") {
    array.splice(i, 1);
  }
}

console.log(array.toString());