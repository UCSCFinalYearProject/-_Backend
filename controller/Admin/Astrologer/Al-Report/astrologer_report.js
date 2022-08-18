
const conn = require('../../../../service/db_service');
const {
    Astrologer_Pending_Payment_Total, Astrologer_All_Payment_Total, Astrologer_Response_Count, Astrologer_Request_Count,
    Astrologer_profit_distribution
} = require('../../../../query/Admin/Astrologer/al_report');
const AppError = require('../../../../utils/appError');

//Take pending payment amount of astrologer
exports.Pending_Payment_Amount = (req, res, next) => {
    try {

        conn.query(Astrologer_Pending_Payment_Total,[req.body.aid],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Payment:data
                })
            }

        })
    } catch ( err ) {

    }
}

//Take all payment amount of astrologer
//SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='0' and ar.receiver_id=1) and (ar.request_date BETWEEN "2022-8-10" and "2022-8-20");
exports.Astrologer_All_Payment_Total = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(Astrologer_All_Payment_Total,[value],(err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Payment:data
                })
            }

        })
    } catch ( err ) {

    }
}


// To take Response count of astrologer
exports.Astrologer_Response_Count = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(Astrologer_Response_Count,[value],(err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Payment:data
                })
            }

        })
    } catch ( err ) {
    }
}

// To take Request count of astrologer
exports.Astrologer_Request_Count = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(Astrologer_Request_Count,[value],(err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Payment:data
                })
            }

        })
    } catch ( err ) {

    }
}

//Astrologer profit distribution
exports.Astrologer_profit_distribution = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(Astrologer_profit_distribution,[value],(err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    profitDistribution:data
                })
            }

        })
    } catch ( err ) {

    }
}
