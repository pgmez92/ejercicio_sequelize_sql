const express = require("express");
const rtLogin = express.Router();
const firebFunctions = require("../modules/firebase/index");


rtLogin.post("/signup", (req, res) => {
    res.json("hola signup");
})



module.exports = rtLogin;