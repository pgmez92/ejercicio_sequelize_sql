require('dotenv').config()
const express = require('express')
const app = express()
const rtMain = require('./routers/rtMain')
const DB = require("./models")
const rtLogin = require('./routers/rtLogin')

//middlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//enrutador principal
app.use('/', rtMain)

//configuracion BDD
DB.connection.authenticate()
    .then(() => console.log("BDD Mysql arrancao"))
    .catch(err => console.log("desastre:", err))

//arrancamos el servidor:
app.listen(8080, (err) => {
    if (err) console.log(err)
    console.log('Server run on port 8080')
})