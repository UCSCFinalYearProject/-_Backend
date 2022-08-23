exports.CHECK_EMAIL = "SELECT * FROM `common_user_details` WHERE email = ?";
exports.CHECK_NP = "SELECT * FROM `baby_name_provider` WHERE email = ?";
exports.CHECK_AL = "SELECT * FROM `astrologer` WHERE email = ?";
exports.CHECK_PT = "SELECT * FROM `paediatrician` WHERE email = ?";
exports.CHECK_ADMIN = "SELECT * FROM `admin` WHERE email = ?";
exports.REGISTER_STUDENT = " INSERT INTO students  VALUES( Null, ?)" ;
