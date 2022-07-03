const numero = prompt("Dime un numero para calcular la tabla..")

for (let tabla = 0 ; tabla < 11 ; tabla +=1 ) {
    console.log(`${numero} x  ${tabla} = ${tabla * numero}`)
}