exports.REGISTERED_Astrologers = " SELECT * FROM `astrologer`" ;
exports.Block_Astrologers ="UPDATE `astrologer` SET `Block_reason` = ?,`STATUS` = '1' WHERE `astrologer`.`user_id` = ?"
exports.Unblock_Astrologers ="UPDATE `astrologer` SET `STATUS` = '0' WHERE `astrologer`.`user_id` = ?"
exports.View_Astrologer_Requests = " SELECT * FROM `astrologer` where STATUS=2; " ;


exports.Registerd_Astrologer_Count = "SELECT COUNT(user_id) FROM `astrologer`; " ;
exports.Blocked_Astrologer_Count = " SELECT COUNT(user_id) FROM `astrologer`WHERE STATUS=1" ;
exports.Pending_Astrologer_Count = " SELECT COUNT(user_id) FROM `astrologer`WHERE STATUS=2 " ;

exports.Astrologers_Month_Profit = " SELECT SUM(ap.amount) as sum FROM `astrologer` a LEFT JOIN astrologer_payment ap on a.user_id=ap.astrologer_id WHERE ap.date_time BETWEEN ? AND ?; " ;
exports.Astrologers_Data_with_profit = " SELECT a.user_id,a.name,a.STATUS,a.profile_picture,a.email,a.service_charge, SUM(ap.amount) as sum FROM `astrologer` a LEFT JOIN astrologer_payment ap on a.user_id=ap.astrologer_id GROUP BY a.user_id; " ;

exports.accept_astrologer = " UPDATE `astrologer` SET `STATUS` = '0' WHERE `astrologer`.`user_id` = ?" ;
exports.reject_astrologer = " DELETE FROM astrologer WHERE `astrologer`.`user_id` = ?" ;
exports.View_Target_astrologer = " SELECT * FROM `astrologer` where `astrologer`.`user_id` = ? " ;
exports.REGISTERED_Astrologers_count = " SELECT COUNT(user_id) FROM `astrologer`" ;
exports.REGISTERED_pediatrician_count = " SELECT COUNT(user_id) FROM `paediatrician`" ;
exports.REGISTERED_mothers_count = " SELECT COUNT(user_id) FROM `parent`" ;
exports.REGISTERED_np_count = " SELECT COUNT(user_id) FROM `baby_name_provider`" ;
exports.View_Target_np = " SELECT * FROM `baby_name_provider` where `baby_name_provider`.`user_id` = ? " ;


