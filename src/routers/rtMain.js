const express = require('express');
const rtMain = express.Router();
const daoUsers = require("../dao/daoUsers");


//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.json({ res: "ey" });
})

rtMain.post('/create', function (req, res) {
    console.log(req.body);
    daoUsers.create(req.body)
        .then(data => res.json(data))
})

rtMain.get("/listar", function (req, res) {
    daoUsers.find()
        .then(data => res.json(data));
})


module.exports = rtMain