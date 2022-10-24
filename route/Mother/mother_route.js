const express = require('express');
const mother_register_route = express.Router();
//yasas
const mother_controller = require("../../controller/Admin/Mother/admin_mother_controller");

const mother_register = require('../../controller/Mother/register_login_controller');


mother_register_route.get("/" , mother_register.mother_login);

mother_register_route.post("/",mother_register.mother_register);
//yasas
mother_register_route.get("/pediatricianarticanls",mother_controller.Pediatrician_article);

mother_register_route.get("/pediatricianList",mother_controller.registered_pediatrician);

module.exports = mother_register_route;
