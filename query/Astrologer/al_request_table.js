exports.REQUEST_table = "SELECT *" +
                        " FROM parent a ,astrologer_request b " +
    "WHERE a.user_id =b.requester_id AND b.receiver_id=?" ;

exports.REQUEST_table_row ="SELECT *FROM parent a ,astrologer_request b WHERE a.user_id=b.requester_id AND request_id=?";

exports.REQUEST_table_row_res = "SELECT * FROM astrologer_response WHERE request_id =?"