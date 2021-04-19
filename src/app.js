require('dotenv').config()
const express = require('express')
const app = express()
const rtMain = require('./routers/rtMain')
const DB = require("./models")

//middlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//enrutador principal
app.use('/', rtMain)

//configuracion BDD
DB.authenticate()
    .then(() => console.log("BDD Mysql arrancao"))
    .catch(err => console.log("err", err))

//arrancamos el servidor:
app.listen(8080, (err) => {
    console.log('Server run on port 8080')
})