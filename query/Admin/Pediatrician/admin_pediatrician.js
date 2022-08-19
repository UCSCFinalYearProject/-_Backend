exports.REGISTERED_Pediatrician = " SELECT * FROM `paediatrician`" ;
exports.Block_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '1' WHERE `paediatrician`.`user_id` = ?"
exports.Unblock_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '0' WHERE `paediatrician`.`user_id` = ?"

exports.View_Pediatrician_Requests = " SELECT * FROM `paediatrician_request` " ;
// exports.View_Pediatrician_Requests_View_Details = " SELECT * FROM `paediatrician_request` WHERE `paediatrician`.`user_id` = ? " ;

