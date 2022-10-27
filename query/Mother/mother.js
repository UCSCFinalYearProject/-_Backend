exports.CHECK_EMAIL = "SELECT * FROM `parent` WHERE email = ?";
exports.CHECK_MOBILE = "SELECT * FROM `parent` WHERE mobile = ?";
exports.REGISTER_MOTHER = "INSERT INTO `parent` (`user_id`, `first_name`, `last_name`, `password`, `email`, `DP`, `STATUS`, `Block_reason`, `login_status`, `Reg_Date`, `warning_messages`, `mobile`) VALUES (NULL, ? , ? , ? , ? , ? , 0 , '' , 0, current_timestamp(), '', ? );" ;


//yasas1
exports.REGISTERED_Pediatrician_article_list = "SELECT * FROM `article`  left join paediatrician on paediatrician.user_id = article.doctor_id; " ;

//yasas2
exports.REGISTERED_Pediatrician_list = " SELECT * FROM `paediatrician` " ;

//yasas3
exports.Top_5_articanls = " SELECT * FROM (SELECT * FROM `article` ORDER BY date DESC LIMIT 3 ) as topatricle  left join paediatrician on paediatrician.user_id = topatricle.doctor_id; " ;

//yasas4
exports.mother_post = " SELECT * FROM `post`";

//Yasas5
exports.Mother_Article_category_list = " SELECT * FROM `article_categories` ";

//Yasas6
exports.Mothers_Artical_list = " SELECT * FROM `post` ";

//Yasas7
exports.Mother_data = " SELECT * FROM `parent` ";