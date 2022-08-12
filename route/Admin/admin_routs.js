const express = require('express');
//mother
const mother_route = express.Router();
const mother_controller = require('../../controller/Admin/Mother/admin_mother_controller');
const astrologer_controller = require('../../controller/Admin/Astrologer/astrologer_controller');
const paediatrician_controller = require('../../controller/Admin/Pediatrician/pediatrician_controller');
const baby_name_provider_controller = require('../../controller/Admin/Name_Provider/name_provider_controller');
const report_stat_card1_controller = require("../../controller/Admin/Astrologer/Al-Report/report_stat_card1_controller");
const report_stat_card2_controller = require("../../controller/Admin/Astrologer/Al-Report/report_stat_card2_controller");

// Thisrouts for mother
mother_route.get("/mother_list",mother_controller.registered_mothers);
// send uid with req body
mother_route.get("/mother_nof_post",mother_controller.NOF_Posts);
mother_route.get("/mother_posts_list",mother_controller.Mother_Posts_list);
mother_route.get("/post_comments_list",mother_controller.Post_Comments_List);

mother_route.get("/Mother_Post_Details",mother_controller.Mother_Post_Details);
mother_route.get("/Mother_Post_Reply_Count",mother_controller.Mother_Post_Reply_Count);

// for mother pending post list tale
mother_route.get("/Mother_Pending_Post_With_Count",mother_controller.Mother_Pending_Post_With_Count);


// send uid with req body
mother_route.get("/mother_nof_comments",mother_controller.NOF_Comments);
mother_route.get("/block_mother",mother_controller.Block_Mother);
mother_route.get("/unblock_mother",mother_controller.Unblock_Mother);


// This routs for Astrologer
mother_route.get("/astrologerlist",astrologer_controller.registered_astrologers);
mother_route.get("/block_astrologer",astrologer_controller.Block_astrologers);
mother_route.get("/unblock_astrologer",astrologer_controller.Unblock_astrologers);

// This routs for paediatrician
mother_route.get("/paediatricianlist",paediatrician_controller.registered_pediatrician);
mother_route.get("/block_paediatrician",paediatrician_controller.Block_pediatrician);
mother_route.get("/unblock_paediatrician",paediatrician_controller.Unblock_pediatrician);

// This routs for baby_name_provider
mother_route.get("/baby_name_providerlist",baby_name_provider_controller.registered_baby_name_provider_controller);
mother_route.get("/block_baby_name_provider",baby_name_provider_controller.Block_baby_name_provider_controller);
mother_route.get("/unblock_baby_name_provider",baby_name_provider_controller.Unblock_baby_name_provider_controller);

//al report
mother_route.get("/al/report_stat_card1",report_stat_card1_controller.stat_card);
mother_route.get("/al/report_stat_card2",report_stat_card2_controller.stat_card);


module.exports = mother_route;
