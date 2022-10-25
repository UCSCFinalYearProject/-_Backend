exports.REGISTER_User_pd = "INSERT INTO `paediatrician`(name, password, email,NIC,Address,phone_number,WorkingAt,experience,STATUS) VALUES (?,2)" ;

exports.REGISTER_User_al = "INSERT INTO `astrologer`(name, password, email, service_charge,NIC,address,phone_number,Currently_working_at,Years_of_experience,registered_at,STATUS) VALUES ( ?, CURRENT_DATE(),2)" ;

exports.REGISTER_User_np = "INSERT INTO `baby_name_provider`(name, password, email, service_charge,NIC,address,phone_number,current_work,Years_of_experience,registered_at,STATUS) VALUES ( ?, CURRENT_DATE(),2)" ;

exports.COMMON_user = "INSERT INTO `common_user_details` (`email`, `password`, `type`) VALUES (?);"

exports.CHECK_user_pd_email = "SELECT * FROM paediatrician WHERE email = ?";
exports.CHECK_user_al_email = "SELECT * FROM astrologer WHERE email = ?";
exports.CHECK_user_np_email = "SELECT * FROM baby_name_provider WHERE email = ?";
exports.EXTRA_TABLE = "INSERT INTO `common_user_details` VALUES ( ?,?,?,)";


//login queries

exports.CHECK_EMAIL = "SELECT * FROM `common_user_details` WHERE email = ?";
exports.CHECK_NP = "SELECT * FROM `baby_name_provider` WHERE email = ?";
exports.CHECK_AL = "SELECT * FROM `astrologer` WHERE email = ?";
exports.CHECK_PT = "SELECT * FROM `paediatrician` WHERE email = ?";
exports.CHECK_ADMIN = "SELECT * FROM `admin` WHERE email = ?";
