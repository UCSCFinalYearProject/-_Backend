const express = require('express');
const al_route = express.Router();
const al_request_table_controller = require('../../controller/Astrologer/al_request_table_controller.js');
const profile_card_controller = require('../../controller/Astrologer/Al-Dashboard/profile_card_controller');
const stat_card1_controller = require('../../controller/Astrologer/Al-Dashboard/stat_card1_controller');
const stat_card2_controller = require('../../controller/Astrologer/Al-Dashboard/stat_card2_controller');

al_route.get("/new_request",al_request_table_controller.request_table);
al_route.get("/db/profile_card",profile_card_controller.profile_card);
al_route.get("/db/stat_card1",stat_card1_controller.stat_card);
al_route.get("/db/stat_card2",stat_card2_controller.stat_card);
module.exports = al_route;
