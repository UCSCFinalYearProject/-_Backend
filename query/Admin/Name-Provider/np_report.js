exports.STAT_card1 = "SELECT COUNT(*) FROM `baby_name_provider`" ;

//this month registerd baby_name_provider
exports.STAT_card2 = "SELECT COUNT(*) FROM `baby_name_provider` WHERE month(registered_at)=month(CURRENT_DATE)" ;


//Astrologer pending paymnets total
// exports.Astrologer_Pending_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE ar.request_status='0' and ar.receiver_id=? and ar.request_date BETWEEN ? and ?;"
exports.NP_Pending_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='0' and ar.receiver_id=?) and (ar.request_date BETWEEN \"2022-8-10\" and \"2022-8-20\");"

//NP All paymnets total
exports.NP_All_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='1' and ar.receiver_id=?) and (ar.request_date BETWEEN \"2022-8-10\" and \"2022-8-20\");"

//NP Response count
exports.NP_Response_Count="SELECT arq.receiver_id, COUNT(ars.request_id) as DoneJobs FROM `astrologer_response` ars LEFT JOIN `astrologer_request` arq ON ars.request_id = arq.request_id WHERE arq.receiver_id=?;"

//NP Request count
exports.NP_Request_Count="SELECT a.receiver_id, COUNT(a.request_id) as reQCount FROM `astrologer_request` as a WHERE a.receiver_id=?;"

//NP profit distribution of year
exports.NP_profit_distribution="SELECT month(ap.date_time),SUM(ap.amount) FROM `astrologer_payment` ap LEFT JOIN `astrologer_request` ar on ap.request_id = ar.request_id WHERE ar.receiver_id=? AND  ap.date_time BETWEEN '2022-07-1' AND '2022-11-10' group by month(ap.date_time);"
