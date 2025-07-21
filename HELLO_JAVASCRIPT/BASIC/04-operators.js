//Operadores
//Se utilizan para relacionar los Datos

//Operadores Aritméticos

let a = 5
let b = 10

console. log (a + b)//Suma
console. log (a - b)//Resta
console. log (a * b)//Multiplicacion
console. log (a / b)//Division

console. log (a % b)//Módulo
console. log (a ** b)//Exponente

a++//Incremento
console. log (a++)

b--//Decremento
console. log (b--)

//Operadores de Asignacion

let myVariable = 2
console. log (myVariable)

myVariable += 2
console. log (myVariable) //=4
//Modifica el valor de vriabñle utilizando el valor que ya tiene esa variable

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//Operadorees de comparación

console. log (a > b)//false
console. log (a < b)//true
console. log (a => b)//false
console. log (a <= b)//true
console. log (a == b)//false
console. log (a == 5)//Comprobando igualdad por valor
console. log (a == a)//true
console. log (a === 5)//Igualdad por identidad (tipo y valor)

console. log (a === "6")//false
console. log (a != 6)//false
console. log (a !== "6")//true

console. log (0 == false)//true
console. log (1 == false)//false

console. log (0 == "")//true
console. log (0 == "  ")//true
console. log (0 == '')//true
console. log (0 == "Hola")//false
console. log (0 === "")//false
console. log (undefined == null)//true
console. log (undefined === null)//false

//Truthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//Todos los boolean true


//Falsy values (valores falsos)
//0
//0n BigInt
//null
//undefined
//NaN
//boolean false
//Cadena de texto vacios


//Operadores Lógicos

//and &&
console. log (5 > 10 && 15 > 20)//false
console. log (5 < 10 && 15 < 20)//true
console. log (5 < 10 && 15 > 20)//false

//or ||
console. log (5 > 10 || 15 > 20)//false
console. log (5 < 10 || 15 < 20)//true
console. log (5 < 10 || 15 > 20)//true
console. log (5 > 10 && 15 > 20 || 30 > 40)//false
console. log (5 > 10 && 15 > 20 || 30 < 40)//true


//not !
console. log (5 > 10 && 15 > 20)//false
console. log (5 > 10 || 15 > 20)//false

console. log (!(5 > 10 && 15 > 20))//true
console. log (!(5 > 10 || 15 > 20))//true
//Si niego el valor invierto el boolean


//Operadores Ternarios //Permiten escribir una condicion
const isRaining = true //-> false

isRaining ? console. log ("Esta lloviendo") : console. log ("No esta lloviendo")
//? si es verdadero
//: si es falso