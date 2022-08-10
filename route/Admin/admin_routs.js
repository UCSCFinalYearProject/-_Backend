const express = require('express');
const mother_route = express.Router();
const mother_controller = require('../../controller/Admin/Mother/admin_mother_controller');
const astrologer_controller = require('../../controller/Admin/Astrologer/astrologer_controller');
const paediatrician_controller = require('../../controller/Admin/Pediatrician/pediatrician_controller');

// Thisrouts for mother
mother_route.get("/mother_list",mother_controller.registered_mothers);
// send uid with req body
mother_route.get("/mother_nof_post",mother_controller.NOF_Posts);
mother_route.get("/mother_posts_list",mother_controller.Mother_Posts_list);
mother_route.get("/post_comments_list",mother_controller.Post_Comments_List);

mother_route.get("/Mother_Post_Details",mother_controller.Mother_Post_Details);
mother_route.get("/Mother_Post_Reply_Count",mother_controller.Mother_Post_Reply_Count);

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



module.exports = mother_route;
