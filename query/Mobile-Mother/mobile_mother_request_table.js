exports.REQUEST_table = "SELECT *" +
    " FROM article " +
      "WHERE a.user_id =b.requester_id AND b.receiver_id=?" ;

exports.VIEW_articles = "SELECT * FROM `article` WHERE `article`.`doctor_id`=?"