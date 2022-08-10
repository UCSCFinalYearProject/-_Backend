const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_Astrologers,Block_Astrologers,Unblock_Astrologers} = require('../../../query/Admin/Astrologer/admin_astrologer');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

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
