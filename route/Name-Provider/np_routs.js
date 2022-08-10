const express = require('express');
const np_route = express.Router();
const np_request_table_controller = require('../../controller/Name-Provider/np_request_table_controller.js');
const profile_card_controller = require('../../controller/Name-Provider/Np-Dashboard/profile_card_controller')
const stat_card1_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card1_controller');
const stat_card2_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card2_controller');

np_route.get("/new_request",np_request_table_controller.request_table);
np_route.get("/db/profile_card",profile_card_controller.profile_card);
np_route.get("/db/stat_card1",stat_card1_controller.stat_card);
np_route.get("/db/stat_card2",stat_card2_controller.stat_card);

module.exports = np_route;