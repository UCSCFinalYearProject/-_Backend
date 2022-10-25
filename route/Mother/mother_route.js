const express = require('express');
const mother_register_route = express.Router();

const mother_register = require('../../controller/Mother/register_login_controller');


mother_register_route.post("/login/" , mother_register.mother_login);

mother_register_route.post("/register/",mother_register.mother_register);


module.exports = mother_register_route;
