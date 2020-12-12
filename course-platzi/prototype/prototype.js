function Hero(name) {
    this.name = name
}

Hero.prototype.saludar = function () {
    console.log(`Hola soy ${this.name}`)
}

const zelda = new Hero('Zelda')

console.log(zelda.name)
console.log(zelda.saludar)
console.log("ToString is: ", zelda.toString)

console.log(Object.getPrototypeOf(zelda))
const prototype = Object.getPrototypeOf(zelda)
console.log(Object.getPrototypeOf(zelda) === prototype) // Es el mismo objeto, no se clona. Se crea una referencia