exports.REQUEST_table = "SELECT *" +
                        " FROM parent a ,astrologer_request b " +
    "WHERE a.user_id =b.requester_id AND b.receiver_id=?" ;

exports.REQUEST_table_row ="SELECT *FROM parent a ,astrologer_request b WHERE a.user_id=b.requester_id AND request_id=?";

exports.REQUEST_table_row_res = "SELECT * FROM astrologer_response WHERE request_id =?"

exports.RESPONSE_table = "INSERT INTO `astrologer_response` (`request_id`,`message`, `letters`) VALUES (?);"

exports.SET_status = "UPDATE astrologer_request SET request_status = 1 WHERE request_id=?"