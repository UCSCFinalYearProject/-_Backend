exports.STAT_card1 = "SELECT COUNT(*) FROM `astrologer`" ;

//this month registerd astrologers
exports.STAT_card2 = "SELECT COUNT(*) FROM `astrologer` WHERE month(registered_at)=month(CURRENT_DATE)" ;

//Astrologer pending payments total
// exports.Astrologer_Pending_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE ar.request_status='0' and ar.receiver_id=? and ar.request_date BETWEEN ? and ?;"
exports.Astrologer_Pending_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='0' and ar.receiver_id=?) and (ar.request_date BETWEEN ? and ?);"

//Astrologer All payments total
exports.Astrologer_All_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='1' and ar.receiver_id=?) and (ar.request_date BETWEEN \"2022-8-10\" and \"2022-8-20\");"

//Astrologer Response count
exports.Astrologer_Response_Count="SELECT arq.receiver_id, COUNT(ars.request_id) as DoneJobs FROM `astrologer_response` ars LEFT JOIN `astrologer_request` arq ON ars.request_id = arq.request_id WHERE arq.receiver_id=?;"

//Astrologer Request count
exports.Astrologer_Request_Count="SELECT a.receiver_id, COUNT(a.request_id) as reQCount FROM `astrologer_request` as a WHERE a.receiver_id=?;"

//Astrologer profit distribution of year
exports.Astrologer_profit_distribution="SELECT month(ap.date_time),SUM(ap.amount) FROM `astrologer_payment` ap LEFT JOIN `astrologer_request` ar on ap.request_id = ar.request_id WHERE ar.receiver_id=? AND  ap.date_time BETWEEN '2022-07-1' AND '2022-11-10' group by month(ap.date_time);"


//this total income of astrologers in between time range
exports.TOT_income = "SELECT SUM(amount) FROM astrologer_payment WHERE status='1' AND date_time BETWEEN ? AND ?" ;

//pending total income of astrologers in between time range
exports.PENDING_tot_income = "SELECT SUM(amount) FROM astrologer_payment WHERE status='0' AND date_time BETWEEN ? AND ?" ;

//registered astrologers in between time range
exports.REGISTERED_al="select month(registered_at), count(*) from astrologer WHERE registered_at BETWEEN ? AND ? group by month(registered_at)";

//profit from astrologers in between time range
exports.PROFIT_al="SELECT month(date_time),SUM(amount) FROM astrologer_payment WHERE date_time BETWEEN ? AND ? GROUP BY month(date_time)";

/*{
    "sdate":"2022-07-01",
    "edate":"2022-08-01"

}*/