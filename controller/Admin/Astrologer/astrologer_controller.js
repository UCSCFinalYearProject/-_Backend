const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_Astrologers,Block_Astrologers,Unblock_Astrologers, View_Astrologer_Requests, Pending_Astrologer_Count,
    Blocked_Astrologer_Count, Registerd_Astrologer_Count, Astrologers_Month_Profit, Astrologers_Data_with_profit,
    accept_astrologer, reject_astrologer
} = require('../../../query/Admin/Astrologer/admin_astrologer');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');
const {TOT_income,PENDING_tot_income,REGISTERED_al,PROFIT_al}=require('../../../query/Admin/Astrologer/al_report')
const {REGISTERED_Pediatrician} = require("../../../query/Admin/Pediatrician/admin_pediatrician");
const {MotherPostsList} = require("../../../query/Admin/Mother/admin_mother");
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
exports.Astrologers_Data_with_profit = (req, res, next) => {
    try {
        conn.query(Astrologers_Data_with_profit, (err,data,feild)=>{
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
exports.Registerd_astrologers_Count = (req, res, next) => {
    try {
        conn.query(Registerd_Astrologer_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.Blocked_astrologers_Count = (req, res, next) => {
    try {
        conn.query(Blocked_Astrologer_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Pending_astrologers_Count = (req, res, next) => {
    try {
        conn.query(Pending_Astrologer_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }

        })
    } catch ( err ) {

    }
}
// block mother
exports.Block_astrologers = (req, res, next) => {
    try {
        conn.query(Block_Astrologers,[req.query.mg,req.query.uid],  (err,data,feild)=>{

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
        conn.query(Unblock_Astrologers,[req.query.uid],  (err,data,feild)=>{

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

// total pending income of astrologer
exports.Al_pending_tot_income = (req, res, next) => {
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

// total registered astrologers
exports.Registered_al = (req, res, next) => {
    try {
        conn.query(REGISTERED_al,[req.body.sdate,req.body.edate],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    reg_np:data,
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
        conn.query(PROFIT_al,[req.body.sdate,req.body.edate],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    reg_np:data,
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
exports.Astrologers_Month_Profit = (req, res, next) => {
    try {

        conn.query(Astrologers_Month_Profit,[req.query.sdate,req.query.edate], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Data:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.accept_astrologer = (req, res, next) => {
    try {
        conn.query(accept_astrologer,[req.query.uid],  (err,data,feild)=>{

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
exports.reject_astrologer = (req, res, next) => {
    try {
        conn.query(reject_astrologer,[req.query.uid],  (err,data,feild)=>{

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



