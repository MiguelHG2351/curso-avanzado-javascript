# Scope o ámbito de una variable

Evita reescribir el valor de una variable, 
aunque al principio javascript tenia problemas comunes por estos temas

# Primer Ejemplo

```js

var saluda = "Hola"
// Esto esta globalmente, si habras la consola y escirbes saluda aparecera su valor

```

# Scope de funciones

```js

const message = "Este es un mensaje"

function hello(message) {
    console.log(message)
}
// Esto se le llama: scope de una función, function scope

```

# Ejemplo de Scope de funciones, las variables var y let

```js

function printNumber() {
    for(i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 100)
    }
}
// Lo que pasa aquí es que i sube un nivel y se declara como var, cuando setTimeout se ejecuta ya termino su ciclo
// Por lo que setTimeout recibe el último valos más no los valores de cada ciclo

```

Primera posible forma

```js

function printNumber() {
    for(i = 0; i < 10; i++) {
        function renderResult(n) {
            setTimeout(() => {
                console.log(n)
            }, 100)
        }
        renderResult(i)
    }
}
// Por cada ciclo se ejecuta la función por lo que se ejecuta un timers por cada iteración

```
Mejor forma, la más recomendable usando variables y aplicando el scope

```js

function printNumber() {
    for(i = 0; i < 10; i++) {
        function renderResult(n) {
            setTimeout(() => {
                console.log(n)
            }, 100)
        }
        renderResult(i)
    }
}
// Si cambias el i = 0 a let i = 0, se crea un block scope por que asi funciona 'let' 
// Por lo que el setTimeout recibe el valor por cada i iteraciones

```

# Ocultando el scope con el type="module"

Si tienes el javascript como un módulo el contexto globales no se veran en la consola pero no es seguro por que el frontend es accesible.


```js
<script type="module" src="/index.js"><script>

```