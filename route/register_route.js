const express = require('express');
const register_route = express.Router();
const register_controller = require('../controller/register_controller');
const student_controller = require('../controller/stundet_controller');

// student_route.post("/" , student_controller.student_register);
register_route.get("/" , student_controller.student_login);


register_route.post("/",register_controller.user_register);


module.exports = register_route;
