const express = require('express');
const mother_register_route = express.Router();

const mother_register = require('../../controller/Mother/register_login_controller');
// const mother_controller = require("../../controller/Admin/Mother/admin_mother_controller");

mother_register_route.post("/login/" , mother_register.mother_login);

mother_register_route.post("/register/",mother_register.mother_register);

// top 5 articles
// mother_register_route.get("/mother_post",mother_controller.Top_5_articanls);
// //mother post
// mother_register_route.get("/mother_post",mother_controller.mother_post);
// // Mother Article category list
// mother_register_route.get("/Mother_Article_category_list",mother_controller.Mother_Article_category_list);
// // Mother’s Artical list
// mother_register_route.get("/Mothers_Artical_list",mother_controller.Mothers_Artical_list);
// // Mother’s Details
// mother_register_route.get("/Mother_data",mother_controller.Mother_data);
// // Read_file
// mother_register_route.get("/read_file",mother_controller.read_data);





module.exports = mother_register_route;
