exports.VIEW_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` WHERE doctor_id=? ";
exports.VIEW_single_articles = "SELECT * FROM `article` WHERE article_id=? ";
exports.VIEW_articles_comments = "SELECT * FROM `article_comments` LEFT JOIN `article` ON `article_comments`.`article_id`=`article`.`article_id` WHERE article_id=?";
exports.VIEW_followers = "SELECT * FROM `pediatrician_followers` LEFT JOIN `parent` ON `parent`.`user_id`=`pediatrician_followers`.`user_id` WHERE doctor_id=?";
exports.Trending_article = "SELECT `article_id`, max(no_of_likes) FROM `article`";
exports.no_of_articles = "SELECT COUNT(article_id) FROM `article`  WHERE doctor_id=?";
exports.no_of_followers = "SELECT COUNT(follower_id) FROM `article`  WHERE doctor_id=?";
