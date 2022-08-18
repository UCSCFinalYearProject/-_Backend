const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_baby_name_provider_controller,Block_baby_name_provider_controller,Unblock_baby_name_provider_controller} = require('../../../query/Admin/Name-Provider/admin_name_provider');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');
const {TOT_income, PENDING_tot_income, REGISTERED_np, PROFIT_np} = require("../../../query/Admin/Name-Provider/np_report");

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

// Name Provider request list(Y)
exports.View_baby_name_provider_requests = (req, res, next) => {
    try {
        conn.query(Baby_Name_Provider_Requests,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    baby_name_provider:data
                })
            }

        })
    } catch ( err ) {

    }
}

// total income of name provider
exports.Np_tot_income = (req, res, next) => {
    try {
        conn.query(TOT_income,[req.body.sdate,req.body.edate],(err,data,feild)=>{

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

// total pending income of name providers
exports.Np_pending_tot_income = (req, res, next) => {
    try {
        conn.query(PENDING_tot_income,[req.body.sdate,req.body.edate],  (err,data,feild)=>{

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

// total registered name providers
exports.Registered_np = (req, res, next) => {
    try {
        conn.query(REGISTERED_np,[req.body.sdate,req.body.edate],(err,data,feild)=>{

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
// total registered name providers
exports.Profit_np = (req, res, next) => {
    try {
        conn.query(PROFIT_np,[req.body.sdate,req.body.edate],(err,data,feild)=>{

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




