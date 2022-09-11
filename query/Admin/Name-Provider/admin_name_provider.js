exports.REGISTERED_baby_name_provider_controller = " SELECT * FROM `baby_name_provider`" ;
exports.Block_baby_name_provider_controller ="UPDATE `baby_name_provider` SET `Block_reason` = ?,`STATUS` = '1' WHERE `baby_name_provider`.`user_id` = ?"
exports.Unblock_baby_name_provider_controller ="UPDATE `baby_name_provider` SET `STATUS` = '0' WHERE `baby_name_provider`.`user_id` = ?"

exports.Baby_Name_Provider_Requests = " SELECT * FROM `baby_name_provider_request`" ;

exports.Registerd_Name_Provider_Count = "SELECT COUNT(user_id) FROM `baby_name_provider`; " ;
exports.Blocked_Name_Provider_Count = " SELECT COUNT(user_id) FROM `baby_name_provider`WHERE STATUS=1" ;
exports.Pending_Name_Provider_Count = " SELECT COUNT(user_id) FROM `baby_name_provider`WHERE STATUS=2 " ;


exports.NP_Month_Profit = " SELECT SUM(bp.amount) as sum FROM baby_name_provider b LEFT JOIN baby_name_provider_payment bp on b.user_id=bp.np_id WHERE bp.date_time BETWEEN ? AND ?; " ;
exports.NP_Data_with_profit = " SELECT a.user_id,a.name,a.STATUS,a.profile_picture,a.email,a.service_charge, SUM(ap.amount) as sum FROM baby_name_provider a LEFT JOIN baby_name_provider_payment ap on a.user_id=ap.np_id GROUP BY a.user_id; " ;




