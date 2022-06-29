// programa pasar 7 euros a dolares

const euro = 7
const dolar = 2
const convDolar = euro / dolar
console.log("Un euro son ",convDolar.toFixed(2),"$")


const body = document.querySelector("body")

const parrafo = document.createElement("p")
parrafo.textContent=`un euro son ${convDolar.toFixed(2)} $`

body.appendChild(parrafo)

console.log(body)