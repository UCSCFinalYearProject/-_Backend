
const conn = require('../../../../service/db_service');
const {
    NP_Pending_Payment_Total, NP_All_Payment_Total, NP_Response_Count, NP_Request_Count,
    NP_profit_distribution
} = require('../../../../query/Admin/Name-Provider/np_report');
const AppError = require('../../../../utils/appError');

//Take pending payment amount of astrologer
exports.NP_Pending_Payment_Amount = (req, res, next) => {

    // console.log(" HI -----------------------------");
    // console.log(req.body);
    // console.log(" End -----------------------------");

    try {

        conn.query(NP_Pending_Payment_Total,[req.body.aid, req.body.sdate , req.body.edate],(err,data,feild)=>{

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
    // res.status(200).json({
    //     Payment:"data"
    // })
}

//Take all payment amount of astrologer
//SELECT ar.receiver_id,SUM(ap.amount) FROM `astrologer_request` ar LEFT JOIN `astrologer_payment` ap ON ar.request_id = ap.request_id WHERE (ar.request_status='0' and ar.receiver_id=1) and (ar.request_date BETWEEN "2022-8-10" and "2022-8-20");
exports.NP_All_Payment_Total = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(NP_All_Payment_Total,[req.body.aid, req.body.sdate , req.body.edate],(err,data,feild)=>{
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
exports.NP_Response_Count = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(NP_Response_Count,[value],(err,data,feild)=>{
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
exports.NP_Request_Count = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(NP_Request_Count,[value],(err,data,feild)=>{
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

//NP profit distribution
exports.NP_profit_distribution = (req, res, next) => {
    try {
        const value=[req.body.aid];
        conn.query(NP_profit_distribution,[req.body.aid, req.body.sdate , req.body.edate],(err,data,feild)=>{
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
