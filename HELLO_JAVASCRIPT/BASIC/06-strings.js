//Strings

//Concatenacion

let myName = "Bernardo"
let greeting = "Hola, " + myName + "!"
console. log (greeting)
console. log (typeof greeting)

//Longitud
console. log (greeting.length)

//Acceso a caracteres
console. log (greeting[0])
console. log (greeting[11])

//Metodos Comunes
console. log (greeting.toUpperCase())
console. log (greeting.toLowerCase)
console. log (greeting.indexOf("Hola"))
console. log (greeting.indexOf("MoureDev"))
console. log (greeting.indexOf("Bernardo"))
console. log (greeting.includes("Hola"))//true
console. log (greeting.includes("MoureDev"))//false
console. log (greeting.includes("Bernardo"))//true
console. log (greeting.slice(0, 10))
console. log (greeting.replace("Bernardo", "Nahuel"))

//Templates Literals

let message = `Hola, este
es mi
curso de 
javascript`

console. log (message)

let email = "arreginbernardo@gmail.com"

console. log (`Hola, ${myName}! Tu email es ${email}.`)


