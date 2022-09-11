exports.REGISTERED_Pediatrician = " SELECT * , COUNT(a.article_id) as count FROM `paediatrician` p LEFT JOIN article a on a.doctor_id=p.user_id GROUP BY p.user_id;" ;
exports.Block_Pediatrician ="UPDATE `paediatrician` SET `reason` = ?, STATUS=1 WHERE `paediatrician`.`user_id` = ?;"
exports.Unblock_Pediatrician ="UPDATE `paediatrician` SET `STATUS` = '0' WHERE `paediatrician`.`user_id` = ?"

exports.View_Pediatrician_Requests = " SELECT * FROM `paediatrician_request` " ;

exports.Registerd_paediatrician_Count = "SELECT COUNT(user_id) FROM `paediatrician`; " ;
exports.Blocked_paediatrician_Count = " SELECT COUNT(user_id) FROM `paediatrician`WHERE STATUS=1" ;
exports.Pending_paediatrician_Count = " SELECT COUNT(user_id) FROM `paediatrician`WHERE STATUS=2 " ;





