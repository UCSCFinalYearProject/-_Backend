const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {  REGISTERED_pediatrician_count,
         REGISTERED_Astrologers_count,
         REGISTERED_mothers_count,
         REGISTERED_np_count} = require('../../../query/Admin/Astrologer/admin_astrologer');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');
exports.registered_astrologers_count = (req, res, next) => {
    try {
        conn.query(REGISTERED_Astrologers_count, (err,data,feild)=>{
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
exports.registered_pediatrician_count = (req, res, next) => {
    try {
        conn.query(REGISTERED_pediatrician_count, (err,data,feild)=>{
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
exports.registered_mothers_count = (req, res, next) => {
    try {
        conn.query(REGISTERED_mothers_count,  (err,data,feild)=>{

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

exports.registered_np_count = (req, res, next) => {
    try {
        conn.query(REGISTERED_np_count,  (err,data,feild)=>{

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



