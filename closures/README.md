# Closure

Closure es la combinación de scope y funciones
por ejemplo:

```javascript

(() => {
    let color = 'green'
    function printColor() {
        console.log(color)
    }
})()

```

Si intentas imprimir esto aparece 'green' en la consola
pero si intentas acceder a colo devuelve undefined por que no existe en el contexto global
la ventaja de esto es que podemos hacer variables privadas algo que el lenguaje no tiene, a diferencia de C#