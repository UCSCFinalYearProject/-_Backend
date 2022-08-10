const express = require('express');
const np_request_table_route = express.Router();
const np_request_table_controller = require('../../controller/Name-Provider/np_request_table_controller');


np_request_table_route.get("/new_request",np_request_table_controller.request_table);
np_request_table_route.route("/new_request")
    .get(np_request_table_controller.request_table)

module.exports = np_request_table_route;
