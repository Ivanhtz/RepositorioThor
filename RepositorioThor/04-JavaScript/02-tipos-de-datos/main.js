//? Tipos de datos

//? DATOS PRIMITIVOS 

//* String --> Cadenas de texto

const comillasSimples = 'Ivan es un crack'
const comillasDobles = "Ivan con comillas dobles"
const comillasVarias = 'Ivan le dice "guapa" a su mujer'
const conBackticks = `Esto es un texto con backticks`

// Si utilizamos backticks podemos:
  // Escribir con espacios y saltos de línea

const texto = 'Viento en popa a toda vela'
const texto2 = `Viento en popa
a toda
vela
`

console.log(texto)

  // Interpolar codigo dentro de un string

const nombre = 'Ivan'
const edad = 35
// Esto sería crear un string "concatenando" trozos de string
const saludo = 'Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años.'

// Esto sería interpolar expresiones de javascript (variables, cálculos, etc) dentro de un string
const saludo2 = `Hola, me llamo ${nombre} y tengo ${edad} años.`

console.log(saludo)

// Con "typeof" podemos saber de qué tipo es una variable
console.log(typeof saludo)

//**************************************/

//* Number --> Números

const num1 = 23
const num2 = -40
const num3 = 5.47
const numString = '23'

console.log(typeof num1)
console.log(typeof numString)

//***********************************/

//* Boolean --> valores booleanos, si/no   verdadero/falso    true/false

const estoyCasado = true
const estoyDivorciado = false

console.log(typeof estoyDivorciado)

//*********************************/

//* Undefined --> Valor no definido
let tuNombre
console.log(typeof tuNombre)

let suNombre = undefined
console.log(typeof suNombre)

//********************************/

//* Null --> es cuando EXPLÍCITAMENTE le decimos que algo NO TIENE VALOR

const misHijos = null

console.log(typeof misHijos) //! esto da object como tipo de dato. Lo podríamos coniderar un error de ECMAScript. Debería ser de tipo null

//*********************************/

//* Symbol --> No lo vamos a ver

const simbolo = Symbol()
console.log(typeof simbolo)

//?==========================================================
//?==========================================================
//? DATOS NO PRIMITIVOS

//* Arrays --> grupos de datos dentro de una misma variable
const frutas = ['pera', 'manzana', 'plátano']
console.log(frutas)
console.log(typeof frutas)



//* Objetos --> varios datos de un mismo elemento
const persona = {
  nombre: 'Ivan',
  edad: 35,
  casado: true
}
console.log(typeof persona)



//* Funciones --> código que será ejecutado más tarde
function suma(a, b) {
  return a + b
}

console.log(typeof suma)

//* RESUMEN!!!!

// PRIMITIVOS
  /**
   * string
   * number
   * boolean
   * undefined
   * null
   * 
   * Symbol
   */
  
// NO PRIMIIVOS
  /**
   * arrays
   * objetos
   * funciones
   */
