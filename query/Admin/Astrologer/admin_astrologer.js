exports.REGISTERED_Astrologers = " SELECT * FROM `astrologer`" ;
exports.Block_Astrologers ="UPDATE `astrologer` SET `STATUS` = '1' WHERE `astrologer`.`user_id` = ?"
exports.Unblock_Astrologers ="UPDATE `astrologer` SET `STATUS` = '0' WHERE `astrologer`.`user_id` = ?"

exports.View_Astrologer_Requests = " SELECT * FROM `astrologer_request` " ;
// exports.View_Astrologer_Requests_View_Details = " SELECT * FROM `astrologer_request` WHERE request_id = ?" ;


