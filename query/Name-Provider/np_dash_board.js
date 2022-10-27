exports.PROFILE_card = "SELECT * FROM `baby_name_provider` WHERE `user_id` = ? " ;
// http://localhost:3000/np/db/profile_card/?user_id=1

exports.STAT_card1 = "SELECT COUNT(*) AS waiting FROM baby_name_provider_request WHERE request_status=0 AND receiver_id =?";
exports.STAT_card2 = "SELECT COUNT(*) AS replied FROM baby_name_provider_request WHERE request_status=1 AND receiver_id =?";

exports.REQUEST_chart = "select month(request_date), count(*) " +
    "from baby_name_provider_request " +
    "WHERE year(request_date) = '2022' " +
    "AND receiver_id=? group by month(request_date)";

exports.PROFIT_chart="select month(date_time), sum(amount) " +
    "from baby_name_provider_payment a,baby_name_provider_request b " +
    "WHERE year(date_time) = '2022' AND b.receiver_id=? " +
    "AND a.request_id=b.request_id group by month(date_time)";
exports.TODAY_req="SELECT * FROM parent a ,baby_name_provider_request b WHERE a.user_id =b.requester_id AND b.receiver_id=? AND date(b.request_date) = CURRENT_DATE";
exports.editptProfileNP="UPDATE `baby_name_provider` SET name=?,description=?,phone_number=?,email=?,linkedin=?,facebook=?,twitter=?,Address=?,service_charge=? WHERE user_id=1";
exports.addQulificationsNP = "INSERT INTO `np_qualification` VALUES (?,?,null)";