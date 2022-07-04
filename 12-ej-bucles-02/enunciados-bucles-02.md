### **Bucles 06.**

Complicando el ejercicio de ==Bucles 02.== Haz un programa que muestre las tablas del 1 al 10 todas seguidas.

* Pensad bien cómo resolverlo, recomendacion: Escribe el resultado que queremos como comentario para descifrar el algoritmo que tienes que usar.

---

### **Bucles 07.**

Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.

---

### **Bucles 08.**

En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.

---

### **Bucles 9.**

Con un `while` construye y muestra por consola un "triángulo" de 7 líneas como el siguiente:

```javascript
let estrellas = 7;

// resultado
*
**
***
****
*****
******
*******
```

---

### **Bucles 10.**

Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:

```javascript

myList = [1,9,3,8,5,7];

```

---

### **Bucles 11.**

En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros.

---

### **Bucles 12.**

Escribe un programa que pida un número mayor que 1 y que devuelva si el número es primo o no. 

<small>Un número es primo si **SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1**</small>

---

### **Bucles 13. - ¡La guinda!**

Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100. 

* Se considera que cuando el usuario introduce un valor, éste es siempre válido. 
* Con cada intento del jugador, el programa le dice si el número secreto es mayor o menor. 
* El jugador tiene 6 intentos para adivinar el número.
* Para crear un número aleatorio real utilizamos este código:
  * `Math.floor((Math.random() * 100) + 1);`