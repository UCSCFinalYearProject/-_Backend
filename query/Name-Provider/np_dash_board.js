exports.PROFILE_card = "SELECT * FROM `baby_name_provider` WHERE `user_id` = ? " ;
// http://localhost:3000/np/db/profile_card/?user_id=1

exports.STAT_card1 = "SELECT COUNT(*) AS waiting FROM baby_name_provider_request WHERE request_status=0";
exports.STAT_card2 = "SELECT COUNT(*) AS replied FROM baby_name_provider_request WHERE request_status=1";
