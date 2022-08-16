const express = require('express');
const np_route = express.Router();
const np_request_table_controller = require('../../controller/Name-Provider/np_request_table_controller.js');
const profile_card_controller = require('../../controller/Name-Provider/Np-Dashboard/profile_card_controller')
const stat_card1_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card1_controller');
const stat_card2_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card2_controller');
const request_chart_controller = require('../../controller/Name-Provider/Np-Dashboard/request_chart_controller');
const profit_chart_controller = require('../../controller/Name-Provider/Np-Dashboard/profit_chart_controller');


np_route.get("/new_request/:receiver_id",np_request_table_controller.request_table);
np_route.get("/db/profile_card/:user_id",profile_card_controller.profile_card);
np_route.get("/db/stat_card1/:receiver_id",stat_card1_controller.stat_card);
np_route.get("/db/stat_card2/:receiver_id",stat_card2_controller.stat_card);
np_route.get("/db/req_chart/:receiver_id",request_chart_controller.request_chart);
np_route.get("/db/profit_chart/:receiver_id",profit_chart_controller.profit_chart);
module.exports = np_route;