exports.REGISTERED_baby_name_provider_controller = " SELECT * FROM `baby_name_provider`" ;
exports.Block_baby_name_provider_controller ="UPDATE `baby_name_provider` SET `STATUS` = '1' WHERE `baby_name_provider`.`user_id` = ?"
exports.Unblock_baby_name_provider_controller ="UPDATE `baby_name_provider` SET `STATUS` = '0' WHERE `baby_name_provider`.`user_id` = ?"

exports.Baby_Name_Provider_Requests = " SELECT * FROM `baby_name_provider_request`" ;
// exports.View_Baby_Name_Provider_Requests_View_Details = " SELECT * FROM `baby_name_provider_request` WHERE `baby_name_provider`.`user_id` = ? " ;


