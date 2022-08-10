exports.REGISTERED_Pediatrician = " SELECT * FROM `paediatrician`" ;
exports.Block_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '1' WHERE `paediatrician`.`user_id` = ?"
exports.Unblock_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '0' WHERE `paediatrician`.`user_id` = ?"


