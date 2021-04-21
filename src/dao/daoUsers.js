const db = require("../models");

let daoUsers = {};

daoUsers.create = (user) => {
    return new Promise((resolved) => {
        db.user.create(user)
            .then(data => resolved(data));
    })
}

daoUsers.find = () => {
    return new Promise((resolved) => {
        db.user.findAll(
            { include: db.block }
        )
            .then(data => resolved(data));
    })
}

module.exports = daoUsers;