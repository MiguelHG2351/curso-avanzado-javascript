# Añadiendo JavaScript en el html

Para añadir JavaScript en html hay 3 maneras

```html
<script async><script>
<script defer><script>

```

# Async

El fetching al archivo de javascript no interrumpe el procesamiento del html hasta que el código javascript se termine de cargar

# defer

Se ejecuta al final de código pero mientras esta el fetching no interrumpe y lo hace asincronamente.


# Si se tiene dos o más async

Sencillo, se ejecuta del más lígero al más pesado e igual se ejecuta hasta que esta listo el fetching
