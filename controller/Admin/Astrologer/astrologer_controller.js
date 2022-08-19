const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_Astrologers,Block_Astrologers,Unblock_Astrologers, View_Astrologer_Requests,

} = require('../../../query/Admin/Astrologer/admin_astrologer');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');
const {TOT_income,PENDING_tot_income,REGISTERED_al,PROFIT_al}=require('../../../query/Admin/Astrologer/al_report')
exports.registered_astrologers = (req, res, next) => {
    try {
        conn.query(REGISTERED_Astrologers, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    astrologers:data
                })
            }

        })
    } catch ( err ) {

    }
}
// block mother
exports.Block_astrologers = (req, res, next) => {
    try {
        conn.query(Block_Astrologers,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }

        })
    } catch ( err ) {

    }
}
// unblock mother
exports.Unblock_astrologers = (req, res, next) => {
    try {
        conn.query(Unblock_Astrologers,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}



// total income of astrologer
exports.Al_tot_income = (req, res, next) => {
    try {
        conn.query(TOT_income,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    tot_income:data,
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}

// total income of astrologer
exports.Al_pending_tot_income = (req, res, next) => {
    try {
        conn.query(PENDING_tot_income,  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    pending_tot_income:data,
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}

// total registered astrologers
exports.Registered_al = (req, res, next) => {
    try {
        conn.query(REGISTERED_al,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    reg_al:data,
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}
// total registered astrologers
exports.Profit_al = (req, res, next) => {
    try {
        conn.query(PROFIT_al,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    reg_al:data,
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}

// astrologer request list(Y)
exports.View_astrologers_requests = (req, res, next) => {
    try {
        conn.query(View_Astrologer_Requests,  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    astrologers:data
                })
            }

        })
    } catch ( err ) {

    }
}

// astrologer request view details(Y)
// exports.View_astrologers_requests_view_details = (req, res, next) => {
//     try {
//         conn.query(View_Astrologer_Requests_View_Details,[req.body.uid],  (err,data,feild)=>{
//
//             if(err){
//                 return next(new AppError(err))
//             }
//             else{
//                 res.status(200).json({
//                     astrologers:data
//                 })
//             }
//
//         })
//     } catch ( err ) {
//
//     }
// }





