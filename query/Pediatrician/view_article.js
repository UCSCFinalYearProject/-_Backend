exports.VIEW_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` WHERE doctor_id=? ";
