const express = require('express');
const al_request_table_route = express.Router();
const al_request_table_controller = require('../../controller/Astrologer/al_request_table_controller.js');


al_request_table_route.get("/new_request",al_request_table_controller.request_table);
al_request_table_route.route("/new_request")
    .get(al_request_table_controller.request_table)

module.exports = al_request_table_route;
