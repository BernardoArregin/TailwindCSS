//Array

//Declaracion
let myArray = []//recomendado
let myArray2 = new Array()

console. log (myArray)
console. log (myArray2)

//Inicializacion

myArray = [1, 2, 3, 4]
myArray2 = Array(1, 2, 3, 4) 

console. log (myArray)
console. log (myArray2)

myArray = ["Bernardo", "Arregin", "alias", 37, true]
myArray2 = Array("Bernardo", "Arregin", "alias", 37, true) 

console. log (myArray)
console. log (myArray2)

myArray2 = new Array (3)
myArray2[0] = "Bernardo"
myArray2[1] = "Arregin"
myArray2[2] = "alias"

console. log (myArray2)

myArray = []
myArray[0] = "Bernardo"
myArray[1] = "Arregin"
myArray[2] = "alias"

console. log (myArray)

//Metodos comunes
myArray = []

//push and pop
myArray.push("Bernardo")
myArray.push("Arregin")
myArray.push("alias")
myArray.push("37")

console. log (myArray)

myArray.pop()
console. log(myArray.pop())//elimina el ultimo elemento del array
console. log (myArray)

//shift y unshift
myArray.shift(myArray)//shift elimina el pruimer elemento del array
console. log(myArray)


myArray.unshift("Bernardo", "alias")//sirve para agregar uno o mas elemntos al principio
console.log(myArray)


