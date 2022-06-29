/*
Esto es un comentario
de bloque
*/

// Esto es un comentario de línea

//? Cosas del lenguaje JavaScript

//* 1--> Es un lenguaje "case sensitive" -> Mayúsculas y minúsculas son letras distintas

//* 2--> Es un lenguaje de "tipado débil" -> no es necesario que le digamos el tipo de datos que van a contener las variables. Además podemos cambiar ese tipo de dato más tarde

//* 3--> JavaScript va a intentar mostrarte el MÍNIMO NÚMERO DE ERRORES POSIBLE

//* 4--> Cada sentencia de Javascript termina con punto y coma, PERO puedes no ponerla.

//* 5--> JavaScript ejecuta cada línea una detras de la otra, como si fuera una fila de una panadería. Hasta que no acaba una no empieza la otra. (En el futuro veremos cómo modificar eso)


console.log('Hola mundo desde un archivo main.js')


//? VARIABLES
//! las variables no deberían empezar con mayúsculas
//! las variables no pueden empezar por números
//! Nada de símbolos raros, ñ, acentos, guiones normales - etc

let MiNombre  //! Mal! primera en mayúscula no! 
//let 2vidas //! Mal!
let cañón //! funciona, pero no es recomendable

//* Recomendación de escritura --> camelCase
let nombredeusuario //! ¡Mal! No se entiende!
let nombre_de_usuario //? Regulero
let nombreDeUsuario // ¡Bien! 😃




//? Cómo se crea una variable
//* let --> Crea una variable que permite que se le cambie el valor más tarde

// Declarar una variable -> Podemos crear una variable SIN ASIGNARLE UN VALOR
let nombre

// Inicializar la variable
nombre = 'Ivan'

// Declarar e inicializar al mismo tiempo
let tuNombre = 'Jessica'
let tuEdad = 35
console.log(tuNombre)

// Modificar el valor de una variable
tuNombre = 'Carlos'
console.log(tuNombre)

tuNombre = 30
console.log(tuNombre)


//* const --> crea una variable que va a PERMANECER CONSTANTE, no me va a dejar cambiarla más tarde

//! const no permite solo declarar, tenemos la obligación de darle un valor inicial siempre

const perra1 = 'Freya'

// perra1 = 'Kira' //! Esto da error



//* var --> forma tradicional de declarar una variable -> no se recomienda su uso

var miFruta = 'plátano'
console.log(miFruta)

//******************************/

//? Cómo mostrar datos para "debuggear"

//* alert() --> Lanza EN EL NAVEGADOR una ventana de alerta. 
//! Cuidado porque frena la ejecución del probrama
// alert(miFruta)
console.log('texto después del alert') // esto no sale hasta que no le des a aceptar

//* confirm() --> Como un alert pero da la opción de aceptar o cancelar
// confirm('¿Estas seguro?')

//* document.write --> Lo que pongas aquí se escribe directamente en el HTML
document.write('esto es un document.write')
document.write(miFruta)

//* console.log() --> Imprime por consola
console.log('***********')

// Podemos escribir varios datos --> separando con comas
console.log(      'Carlos'    ,     'Jessica'       )
console.log(      miFruta   ,     perra1       )

// Yo lo utilizo mucho para en consola saber de qué variable hablamos
console.log( 'perra1 ->' , perra1)

//? Otra forma de saber de qué variable estamos hablando es ponerla entre llaves. Eso hace que en consola se muestre el nombre de la variable y su valor.
console.log({perra1}) // { perra1: 'Freya' }


const myName = 'Ivan'
const myAge = 35

//! No usemos los varios console.logs para "concatenar" textos, porque no conseguimos un texto grande con toda la frase.
console.log('Hola me llamo', myName, 'y tengo' , myAge, 'años.')


//* Extras del console.log

// Mensaje de error
console.error('¡Error!')

// Mensaje de advertencia
console.warn('Ten cuidado...')

// Calculador de tiempo
console.time('temporizador 1')
let miVariable = 5
console.timeEnd('temporizador 1')


console.time('temporizador 2')
let miOtraVariable = 10
console.timeEnd('temporizador 2')

//* Podemos pedir datos al usuario usando el --> prompt()
const edadUsuario = prompt('Dime tu edad')
console.log(edadUsuario)