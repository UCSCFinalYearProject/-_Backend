
exports.REGISTERED_Pediatrician = " SELECT * , COUNT(a.article_id) as count FROM `paediatrician` p LEFT JOIN article a on a.doctor_id=p.user_id GROUP BY p.user_id;" ;
exports.REGISTERED_Pediatrician_without_pending = " SELECT * , COUNT(a.article_id) as count FROM `paediatrician` p LEFT JOIN article a on a.doctor_id=p.user_id where p.STATUS <> '2' GROUP BY p.user_id;" ;
exports.REGISTERED_Pediatrician_list = " SELECT * FROM `paediatrician` " ;

exports.Block_Pediatrician ="UPDATE `paediatrician` SET `reason` = ?, STATUS=1 WHERE `paediatrician`.`user_id` = ?;"
exports.Unblock_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '0' WHERE `paediatrician`.`user_id` = ?"
exports.View_Target_Pediatrician = " SELECT * FROM `paediatrician` where `paediatrician`.`user_id` = ? " ;
exports.View_Pediatrician_Requests = " SELECT * FROM `paediatrician` where STATUS=2" ;
exports.accept_pediatrician = " UPDATE `paediatrician` SET `STATUS` = '0' WHERE `paediatrician`.`user_id` = ?" ;
exports.reject_pediatrician = " DELETE FROM paediatrician WHERE `paediatrician`.`user_id` = ?" ;

exports.Registerd_paediatrician_Count = "SELECT COUNT(user_id) FROM `paediatrician`; " ;
exports.Blocked_paediatrician_Count = " SELECT COUNT(user_id) FROM `paediatrician`WHERE STATUS=1" ;
exports.Pending_paediatrician_Count = " SELECT COUNT(user_id) FROM `paediatrician`WHERE STATUS=2 " ;





