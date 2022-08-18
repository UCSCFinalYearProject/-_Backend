exports.STAT_card1 = "SELECT COUNT(*) FROM `astrologer`" ;

//this month registerd astrologers
exports.STAT_card2 = "SELECT COUNT(*) FROM `astrologer` WHERE month(registered_at)=month(CURRENT_DATE)" ;

//this total income of astrologers in between time range
exports.TOT_income = "SELECT SUM(amount) FROM astrologer_payment WHERE status='1' AND date_time BETWEEN '2022-07-10' AND '2022-08-30'" ;

//pending total income of astrologers in between time range
exports.PENDING_tot_income = "SELECT SUM(amount) FROM astrologer_payment WHERE status='0' AND date_time BETWEEN '2022-07-10' AND '2022-08-30'" ;

//registered astrologers in between time range
exports.REGISTERED_al="select month(registered_at), count(*) from astrologer WHERE registered_at BETWEEN '2022-07-10' AND '2022-08-10' group by month(registered_at)";

//profit from astrologers in between time range
exports.PROFIT_al="SELECT month(date_time),SUM(amount) FROM astrologer_payment WHERE date_time BETWEEN '2022-07-12' AND '2022-08-25' GROUP BY month(date_time)\n"