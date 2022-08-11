const express = require('express');
const al_report_route = express.Router();

const stat_card1_controller = require('../../controller/Admin/Astrologer/Al-Report/report_stat_card1_controller');



al_report_route.get("/al_report/stat_card1",stat_card1_controller.stat_card);

//http://localhost:3000/al/db/profit_chart/1

module.exports = al_report_route;
