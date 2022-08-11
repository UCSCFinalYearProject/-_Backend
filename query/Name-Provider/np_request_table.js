exports.REQUEST_table = "SELECT *" +
                        " FROM parent a ,baby_name_provider_request b " +
                        "WHERE a.user_id =b.requester_id AND b.receiver_id=?" ;