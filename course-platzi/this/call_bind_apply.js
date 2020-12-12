function saludar() {
    console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

function saludar2(edad, apellido) {
    console.log(
        `Hola. Soy ${this.name} ${this.apellido} de ${edad} y ${apellido} `
    );
}

const Miguel = {
    name: "Miguel",
    apellido: "Hernández",
};

saludar.call(Miguel); // Solos se pasa this, This es el objeto dado

saludar2.call(Miguel, 15, "Nicaragua");
              //This  Valores de la función



// saludar2.apply(Miguel, [15, 'Nicaragua'])
//primera forma

// const valores = [15, 'Nicaragua']

// saludar2.apply(Miguel, valores)

// La mejor forma


const Daniel = {
    name: "Daniel",
    apellido: "Nose xd",
};

const DanielSaluda = saludar.bind(Daniel)

DanielSaluda()

// // Si recibe parámetros se hace lo siguiente

// const DanielSaluda2 = saludar2.bind(Daniel)
// DanielSaluda2(18, 'Nicaragua')

// Otra Forma

// const DanielSaluda2 = saludar2.bind(Daniel, 18, 'Nicaragua')
// DanielSaluda2()


// Método Kurin, guardan parcialmente algunos arguemntos
const DanielSaluda2 = saludar2.bind(Daniel, 18)
DanielSaluda2('Nicaragua')