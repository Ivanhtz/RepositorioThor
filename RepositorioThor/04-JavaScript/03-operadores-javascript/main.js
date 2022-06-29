//? Operadores Matemáticos

const num1 = 10
const num2 = 5

//* Sumar --> +

const suma1 = 10 + 7

const suma2 = num1 + num2

console.log('10 + 7 ->' , suma1)
console.log('num1 + num2 ->', suma2)
console.log('suma1 ->', suma1)
console.log({suma1})

// El operador de suma también sirve para CONCATENAR textos

console.log('hola ' + 'mundo')

//! Cosas raras/curiosas cuando sumamos. SI HAY UN STRING EN LA SUMA, va a intentar convertir el otro elemento en un string
console.log('2 + 2 -->', 2 + 2)
console.log('"hola" + 2 -->', "hola" + 2)
console.log('false + "mentiroso" -->', false + "mentiroso")
console.log('undefined + "lo que sea" -->', undefined + "lo que sea")
console.log('null + "valor nulo" -->', null + "valor nulo")

console.log('true + true -->', true + true)
console.log('false + true -->', false + true)
console.log('false + false -->', false + false)

console.log('null + 1 -->', null + 1)
console.log('undefined + 5 -->', undefined + 5) // NaN --> Not a Number

//* Restar -->  -

const resta = num2 - num1
console.log({resta})

//! Cosas raras/curiosas cuando restamos --> el signo menos intenta convertir el otro elemento en Number
console.log("'5' - '3' ->", '5' - '3')
console.log("5 - '3' ->", 5 - '3')
console.log("'5' - 3 ->", '5' - 3)
console.log("5 - true ->", 5 - true)
console.log("5 - false ->", 5 - false)
console.log("5 - undefined ->", 5 - undefined) //! NaN Not a Number
console.log("5 - null ->",5 - null)

//* Multiplicar --> *

const multiplicacion = num1 * num2
console.log("multiplicacion ->" , multiplicacion)
console.log({multiplicacion})

// Como extra, si utilizamos 2 asteriscos es como hacer una POTENCIA
const potencia = num1 ** num2 // 10 elevado a 5
console.log({potencia})



//* División -->  /

const division = num1 / num2
console.log({division})

const division2 = 10 / 3
console.log({division2})


//* Módulo --> Devuelve el resto que queda cuando un número se divide por otro, como cuando dividíamos con la caja en L en el cole --> %
//! NO ES UN TANTO POR CIENTO!

const modulo1 = 10 % 2
const modulo2 = 11 % 3

console.log('10 % 2 -->', modulo1)
console.log('11 % 3 -->', modulo2)

//? Esto lo utilizamos para saber si un número es múltiplo de otro
//? En el caso más simple de todos, si un número es par o impar

//***********************************/

//* EXTRA! Siempre que queramos acortar el número de decimales utilizaremos una función que todos los números, por el hecho de ser números tienen que se llama toFixed(numeroDeDecimales)
//! ¡Ojo! 👁 Que toFixed convierte el número en un string.

const division3 = 11 / 3
console.log(division3.toFixed(2))

//* EXTRA 2: Para transformar cualquier valor a un Number (siempre que se pueda) utilizaremos:

    //* parseInt() --> Transforma el string a un ENTERO
    console.log('parseInt("23.574") ->', parseInt('23.574'))

    //* parseFloat() --> Trasnforma el string en un FLOAT (decimal)
    console.log('parseFloat("23.574") ->', parseFloat('23.574'))

    //* Number() --> Transforma lo que sea en un número

    console.log('Number("12") -->', Number("12"))
    console.log('Number("hola") -->', Number("hola"))
    console.log('Number("12.86585") -->', Number("12.86585"))
    console.log('Number(true) -->', Number(true))
    console.log('Number(false) -->', Number(false))
    console.log('Number(null) -->', Number(null))
    console.log('Number(undefined) -->', Number(undefined))

    //* Podemos transformar en un número utilizando un + delante del número
    console.log('+"12" -->', +"12")
    console.log('+"hola" -->', +"hola")
    console.log('+"12.86585" -->', +"12.86585")
    console.log('+true -->', +true)
    console.log('+false -->', +false)
    console.log('+null -->', +null)
    console.log('+undefined -->', +undefined)


//*******************************************/

//? Operadores de asignación
// Asignar es DAR UN VALOR NUEVO A UNA VARIABLE

//*   =   -->  Asigna y reasigna de forma normal

let nombre = 'Ivan'
nombre = 23


//* +=  --> Asigna un nuevo valor SUMANDO
let numero = 1
numero = numero + 2

numero += 2

console.log({numero})

//? En ocasiones querremos sumar un trozo de string a otro de la misma forma

let libro = 'Harry Potter'
libro = libro + ' y la piedra filosofal'   // esto
libro += ' y la piedra filosofal'          // y esto es lo mismo

console.log({libro})

//* Ocurre exactamente lo mismo con todos los demás operadores matemáticos

  //* numero += 2  -->   numero = numero + 2
  //* numero -= 2  -->   numero = numero - 2
  //* numero *= 2  -->   numero = numero * 2
  //* numero /= 2  -->   numero = numero / 2
  //* numero %= 2  -->   numero = numero % 2


//? Operadores de incremento y decremento
//* Básicamente hacen EXACTAMENTE LO MISMO que hemos hecho antes con el += o el -= pero solo si lo queremos hacer de 1 en 1
//! OJO porque también cambia el valor de la variable anterior por un nuevo valor

let num = 50
num = num + 1  // 51
num += 1       // 52
num -= 1       // 51
num++          // 52 
num++          // 53
num--          // 52
num--          // 51
num++          // 52

console.log({num})