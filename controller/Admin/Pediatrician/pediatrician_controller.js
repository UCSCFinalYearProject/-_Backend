const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_Pediatrician,Block_Pediatrician,Unblock_Pediatrician} = require('../../../query/Admin/Pediatrician/admin_pediatrician');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

exports.registered_pediatrician = (req, res, next) => {
    try {
        conn.query(REGISTERED_Pediatrician, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    paediatrician:data
                })
            }

        })
    } catch ( err ) {

    }
}
// block mother
exports.Block_pediatrician = (req, res, next) => {
    try {
        conn.query(Block_Pediatrician,[req.body.uid],  (err,data,feild)=>{

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
exports.Unblock_pediatrician = (req, res, next) => {
    try {
        conn.query(Unblock_Pediatrician,[req.body.uid],  (err,data,feild)=>{

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
