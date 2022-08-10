const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_baby_name_provider_controller,Block_baby_name_provider_controller,Unblock_baby_name_provider_controller} = require('../../../query/Admin/Name-Provider/admin_name_provider');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

exports.registered_baby_name_provider_controller = (req, res, next) => {
    try {
        conn.query(REGISTERED_baby_name_provider_controller, (err,data,feild)=>{
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
// block NP
exports.Block_baby_name_provider_controller = (req, res, next) => {
    try {
        conn.query(Block_baby_name_provider_controller,[req.body.uid],  (err,data,feild)=>{

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
// unblock NP
exports.Unblock_baby_name_provider_controller = (req, res, next) => {
    try {
        conn.query(Unblock_baby_name_provider_controller,[req.body.uid],  (err,data,feild)=>{

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
