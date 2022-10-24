const express = require('express');
const mother_register_route = express.Router();
//yasas
const mother_controller = require("../../controller/Admin/Mother/admin_mother_controller");

const mother_register = require('../../controller/Mother/register_login_controller');


mother_register_route.get("/" , mother_register.mother_login);

mother_register_route.post("/",mother_register.mother_register);

//yasas
mother_register_route.get("/pediatricianarticanls",mother_controller.Pediatrician_article);

//yasas
mother_register_route.get("/pediatricianList",mother_controller.registered_pediatrician);

//yasas
mother_register_route.get("/Top_5_articanls",mother_controller.Top_5_articanls);

//Yasas
mother_register_route.get("/mother_post",mother_controller.mother_post);

//Yasas
mother_register_route.get("/Mother_Article_category_list",mother_controller.Mother_Article_category_list);

//Yasas
mother_register_route.get("/Mothers_Artical_list",mother_controller.Mothers_Artical_list);






module.exports = mother_register_route;
