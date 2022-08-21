exports.STAT_card1 = "SELECT COUNT(*) FROM `baby_name_provider`" ;

//this month registerd baby_name_provider
exports.STAT_card2 = "SELECT COUNT(*) FROM `baby_name_provider` WHERE month(registered_at)=month(CURRENT_DATE)" ;


exports.NP_Pending_Payment_Total="SELECT nr.receiver_id , SUM(np.amount) FROM `baby_name_provider_request` nr LEFT JOIN `baby_name_provider_payment` np ON nr.request_id = np.request_id WHERE (nr.request_status='0' and nr.receiver_id= ? ) and (nr.request_date BETWEEN ? and ? );"

//NP All payments total
exports.NP_All_Payment_Total="SELECT ar.receiver_id,SUM(ap.amount) FROM `baby_name_provider_request` ar LEFT JOIN `baby_name_provider_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='1' and ar.receiver_id=?) and (ar.request_date BETWEEN ? and ?);"


//NP Response count
exports.NP_Response_Count="SELECT arq.receiver_id, COUNT(ars.request_id) as DoneJobs FROM `baby_name_provider_response` ars LEFT JOIN `baby_name_provider_request` arq ON ars.request_id = arq.request_id WHERE arq.receiver_id=?;"

//NP Request count
exports.NP_Request_Count="SELECT a.receiver_id, COUNT(a.request_id) as reQCount FROM `baby_name_provider_request` as a WHERE a.receiver_id=?;"

//NP profit distribution of year
exports.NP_profit_distribution="SELECT month(ap.date_time),SUM(ap.amount) FROM `baby_name_provider_payment` ap LEFT JOIN `baby_name_provider_request` ar on ap.request_id = ar.request_id WHERE ar.receiver_id=? AND ap.date_time BETWEEN ? AND ? group by month(ap.date_time);"

//this total income of astrologers in between time range
exports.TOT_income = "SELECT SUM(amount) FROM baby_name_provider_payment WHERE status='1' AND date_time BETWEEN ? AND ?" ;

//pending total income of astrologers in between time range
exports.PENDING_tot_income = "SELECT SUM(amount) FROM baby_name_provider_payment WHERE status='0' AND date_time BETWEEN ? AND ?" ;

//registered astrologers in between time range
exports.REGISTERED_np="select month(registered_at), count(*) from baby_name_provider WHERE registered_at BETWEEN ? AND ? group by month(registered_at)";

//profit from astrologers in between time range
exports.PROFIT_np="SELECT month(date_time),SUM(amount) FROM baby_name_provider_payment WHERE date_time BETWEEN ? AND ? GROUP BY month(date_time)";