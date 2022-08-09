const express = require('express');
const mother_route = express.Router();
const mother_controller = require('../../controller/Admin/Mother/admin_mother_controller');


mother_route.get("/",mother_controller.registered_mothers);
mother_route.route("/")
    .get(mother_controller.registered_mothers)

module.exports = mother_route;
