const express = require('express');
//mother
const mother_route = express.Router();
const mother_controller = require('../../controller/Admin/Mother/admin_mother_controller');
const astrologer_controller = require('../../controller/Admin/Astrologer/astrologer_controller');
const paediatrician_controller = require('../../controller/Admin/Pediatrician/pediatrician_controller');
const baby_name_provider_controller = require('../../controller/Admin/Name_Provider/name_provider_controller');
const report_stat_card1_controller = require("../../controller/Admin/Astrologer/Al-Report/report_stat_card1_controller");
const report_stat_card2_controller = require("../../controller/Admin/Astrologer/Al-Report/report_stat_card2_controller");
const Astrologer_Report = require("../../controller/Admin/Astrologer/Al-Report/astrologer_report");
const ad_dashboard_controller = require("../../controller/Admin/Ad_Dashboard/ad_dashbord_controller");
const Np_Report = require("../../controller/Admin/Name_Provider/Np-Report/np_report");



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

mother_route.get("/view_astrologer_requests",astrologer_controller.View_astrologers_requests);

// This routs for paediatrician
mother_route.get("/paediatricianlist",paediatrician_controller.registered_pediatrician);
mother_route.get("/block_paediatrician",paediatrician_controller.Block_pediatrician);
mother_route.get("/unblock_paediatrician",paediatrician_controller.Unblock_pediatrician);

mother_route.get("/view_paediatrician_requests",paediatrician_controller.View_pediatricians_requests);

// This routs for baby_name_provider
mother_route.get("/baby_name_providerlist",baby_name_provider_controller.registered_baby_name_provider_controller);
mother_route.get("/block_baby_name_provider",baby_name_provider_controller.Block_baby_name_provider_controller);
mother_route.get("/unblock_baby_name_provider",baby_name_provider_controller.Unblock_baby_name_provider_controller);

mother_route.get("/view_baby_name_provider_requests",baby_name_provider_controller.View_baby_name_provider_requests);

//al report
mother_route.get("/al/report_stat_card1",report_stat_card1_controller.stat_card);
mother_route.get("/al/report_stat_card2",report_stat_card2_controller.stat_card);

//Totake astrologer pending payment amount
mother_route.get("/al/Pending_Payment_Amount",Astrologer_Report.Pending_Payment_Amount);
//Totake astrologer all payment amount
mother_route.get("/al/Astrologer_All_Payment_Total",Astrologer_Report.Astrologer_All_Payment_Total);
//To take response count of astrologer
mother_route.get("/al/Astrologer_Response_Count",Astrologer_Report.Astrologer_Response_Count);
//To take request count of astrologer
mother_route.get("/al/Astrologer_Request_Count",Astrologer_Report.Astrologer_Request_Count);
//To take profit distibution
mother_route.get("/al/Astrologer_profit_distribution",Astrologer_Report.Astrologer_profit_distribution);

//Totake astrologer pending payment amount
mother_route.get("/np/Pending_Payment_Amount",Np_Report.NP_Pending_Payment_Amount);
//Totake astrologer all payment amount
mother_route.get("/np/NP_All_Payment_Total",Np_Report.NP_All_Payment_Total);
//To take response count of astrologer
mother_route.get("/np/NP_Response_Count",Np_Report.NP_Response_Count);
//To take request count of astrologer
mother_route.get("/np/NP_Request_Count",Np_Report.NP_Request_Count);
//To take profit distibution
mother_route.get("/np/NP_profit_distribution",Np_Report.NP_profit_distribution);





mother_route.get("/al/al_tot_income",astrologer_controller.Al_tot_income);
mother_route.get("/al/al_pending_tot_income",astrologer_controller.Al_pending_tot_income);
mother_route.get("/al/reg_al",astrologer_controller.Registered_al);
mother_route.get("/al/profit_al",astrologer_controller.Profit_al);


mother_route.get("/ad/dashboard_as_count",ad_dashboard_controller.registered_astrologers_count);
mother_route.get("/ad/dashboard_p_count",ad_dashboard_controller.registered_pediatrician_count);
mother_route.get("/ad/dashboard_m_count",ad_dashboard_controller.registered_mothers_count);
mother_route.get("/ad/dashboard_np_count",ad_dashboard_controller.registered_np_count);

module.exports = mother_route;
