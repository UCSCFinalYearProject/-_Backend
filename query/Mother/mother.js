exports.CHECK_EMAIL = "SELECT * FROM `parent` WHERE email = ?";
exports.CHECK_MOBILE = "SELECT * FROM `parent` WHERE mobile = ?";
exports.REGISTER_MOTHER = "INSERT INTO `parent` (`user_id`, `first_name`, `last_name`, `password`, `email`, `DP`, `STATUS`, `Block_reason`, `login_status`, `Reg_Date`, `warning_messages`, `mobile`) VALUES (NULL, ? , ? , ? , ? , ? , 0 , '' , 0, current_timestamp(), '', ? );" ;

//yasas
exports.REGISTERED_Pediatrician_article_list = " SELECT * FROM `article` " ;