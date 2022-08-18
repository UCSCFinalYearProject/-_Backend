exports.STAT_card1 = "SELECT COUNT(*) FROM `baby_name_provider`" ;

//this month registerd baby_name_provider
exports.STAT_card2 = "SELECT COUNT(*) FROM `baby_name_provider` WHERE month(registered_at)=month(CURRENT_DATE)" ;