exports.REQUEST_table = "SELECT *" +
                        " FROM parent a ,baby_name_provider_request b " +
                        "WHERE a.user_id =b.requester_id AND b.receiver_id=?" ;

exports.REQUEST_table_row ="SELECT *FROM parent a ,baby_name_provider_request b WHERE a.user_id=b.requester_id AND request_id=?";

exports.REQUEST_table_row_res = "SELECT * FROM baby_name_provider_response WHERE request_id=?";

exports.RESPONSE_table = "INSERT INTO `baby_name_provider_response` (`request_id`, `message`, `names`) VALUES (?);"

exports.SET_status = "UPDATE baby_name_provider_request SET request_status = 1 WHERE request_id=?"