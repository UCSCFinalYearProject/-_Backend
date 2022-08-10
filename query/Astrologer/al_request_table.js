exports.REQUEST_table = "SELECT first_name,last_name,email,request_date,request_status" +
                        " FROM parent a ,astrologer_request b " +
                        "WHERE a.user_id =b.requester_id AND b.receiver_id=1" ;