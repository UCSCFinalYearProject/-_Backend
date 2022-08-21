exports.REGISTERED_Astrologers = " SELECT * FROM `astrologer`" ;
exports.Block_Astrologers ="UPDATE `astrologer` SET `STATUS` = '1' WHERE `astrologer`.`user_id` = ?"
exports.Unblock_Astrologers ="UPDATE `astrologer` SET `STATUS` = '0' WHERE `astrologer`.`user_id` = ?"
exports.View_Astrologer_Requests = " SELECT * FROM `astrologer_request` " ;


exports.REGISTERED_Astrologers_count = " SELECT COUNT(user_id) FROM `astrologer`" ;
exports.REGISTERED_pediatrician_count = " SELECT COUNT(user_id) FROM `paediatrician`" ;
exports.REGISTERED_mothers_count = " SELECT COUNT(user_id) FROM `parent`" ;
exports.REGISTERED_np_count = " SELECT COUNT(user_id) FROM `baby_name_provider`" ;


