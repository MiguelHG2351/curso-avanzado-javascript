const config = require('./config')
const express = require('express')
const app = express()

//routes
const principal = require('./router/index.routes')

//middlewars
app.use(express.json())

app.use('/', principal)

app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
})
