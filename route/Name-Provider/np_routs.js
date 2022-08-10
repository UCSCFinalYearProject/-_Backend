const express = require('express');
const np_route = express.Router();
const np_request_table_controller = require('../../controller/Name-Provider/np_request_table_controller.js');
const profile_card_controller = require('../../controller/Name-Provider/Np-Dashboard/profile_card_controller')

np_route.get("/new_request",np_request_table_controller.request_table);
np_route.get("/db/profile_card",profile_card_controller.profile_card);


module.exports = np_route;