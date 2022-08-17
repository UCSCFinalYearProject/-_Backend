exports.VIEW_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` WHERE doctor_id=? ";
exports.VIEW_single_articles = "SELECT * FROM `article` WHERE article_id=? ";
exports.VIEW_articles_comments = "SELECT * FROM `article_comments` LEFT JOIN `article` ON `article_comments`.`article_id`=`article`.`article_id` WHERE article_id=?";
