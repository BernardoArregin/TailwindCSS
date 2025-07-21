/*En JS los tipos de datos llamados Primmitivos son los 
datos en los que se fundamenta nuestra interaciion con el lenguaje.
Son datos basicos e inmutables y representan un nsolo valor*/

//TIPOS DE DATOS

//String(cadena de texto)
let name = "-------"
let alias = "-------"
let email = "-------------------"

//Numeros(number)
let age = 17 //Enteros
let height = 1.87 //Decimales

//Booleanos(boolean)
let isStudent = true
let isTeacher = false

//Undefined
let undefinedValue
console.log (undefinedValue)
//LA variable se declaro pero todavia no se le asigno un valor 

//Null
    let nullValue = null
    //Representa intensionalmente la ausencia de un valor

//Symbol
let mySymbol = Symbol ("mySymbol")
    //Representa valores unicos que pueden ser utilizados como identificadores de propiedades

//BigInt
let myBigInt = BigInt (42746824926428632472964245783)
let myBigInt2 = BigInt (42746824926428632472964245783n)

/*BigInt se puede utilizar toda la memoria de la maquina y se va reservando en funcion 
de la que este disponible. Son numeros enteros muy grandes */

//Mostramos los tipos de datos

//typeof name

console. log (typeof name)//String
console. log (typeof alias)//String
console. log (typeof email)//String

console. log (typeof age)//Number
console. log (typeof height)//Number

console. log (typeof isTeacher)//boolean
console. log (typeof isStudent)//boolean

console. log(typeof undefinedValue)//undefined

console. log (typeof nullValue)//objeto

console. log (typeof mySymbol)//Symbol

console. log (typeof myBigInt)//BigInt
console. log(typeof myBigInt2)//BigInt