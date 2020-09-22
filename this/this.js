function whoIsThis() {
    'use strict'
    return this
}

function whoIsThisNoStrict() {
    return this
}

console.log(whoIsThis())
console.log(whoIsThisNoStrict())

// Si se usa use stric devuelve undefined

// si no devuelve windows como objeto global

const person = {
    name: 'Miguel',
    saludar: function () {
        console.log(`Hola Soy ${this.name}`)
    }
}

person.saludar() // Hola Soy Miguel

const saludo = person.saludar
saludo() // Hola Soy 

function Person(name) {
    this.name = name
}

Person.prototype.saludar = function () {
    console.log(`Me llamo ${this.name}`)
}

const Miguel = new Person('Miguel')

Miguel.saludar()