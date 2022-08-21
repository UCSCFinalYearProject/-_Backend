exports.REGISTER_User_pd = "INSERT INTO `paediatrician`(name, password, email) VALUES (?)" ;

exports.REGISTER_User_al = "INSERT INTO `astrologer`(name, password, email, service_charge, registered_at) VALUES ( ?, 2000, '2022-10-25')" ;

exports.REGISTER_User_np = "INSERT INTO `baby_name_provider`(name, password, email, service_charge, registered_at) VALUES ( ?, 2000, '2022-10-25')" ;

exports.CHECK_user_pd_email = "SELECT * FROM paediatrician WHERE email = ?";
exports.CHECK_user_al_email = "SELECT * FROM astrologer WHERE email = ?";
exports.CHECK_user_np_email = "SELECT * FROM baby_name_provider WHERE email = ?";