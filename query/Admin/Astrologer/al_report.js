exports.STAT_card1 = "SELECT COUNT(*) FROM `astrologer`" ;

//this month registerd astrologers
exports.STAT_card2 = "SELECT COUNT(*) FROM `astrologer` WHERE month(registered_at)=month(CURRENT_DATE)" ;