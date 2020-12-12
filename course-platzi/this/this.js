function whoIsThis() {
    'use strict'
    return this // Devuelve undefined por que whoIsThis no pertenece ninguna clase
}

function whoIsThisNoStrict() {
    return this // Devuelve windows por que no esta en modo estricto
}

console.log(whoIsThis())
console.log(whoIsThisNoStrict())

// Si se usa use stric devuelve undefined

// si no devuelve windows como objeto global

const person = {
    name: 'Miguel',
    saludar: function () {
        console.log(`Hola Soy ${this.name}`) // this sube un nivel y ahora si puede acceder a name: 'Miguel
    }
}

person.saludar() // Hola Soy Miguel

const saludo = person.saludar
saludo() // Hola Soy 
// No muestra el nombre por que se cambia el contexto de this



function Person(name) {
    this.name = name // Se crea un constructor
}

Person.prototype.saludar = function () {
    console.log(`Me llamo ${this.name}`)
}

const Miguel = new Person('Miguel')

Miguel.saludar()