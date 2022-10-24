const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {REQUEST_table } = require('../../query/Name-Provider/np_request_table');
const { REQUEST_TABLE_MODEL } = require('../../model/Name-Provider/np_request_table_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');
const {TODAY_req} = require("../../query/Name-Provider/np_dash_board");
const {REQUEST_table_row} = require("../../query/Name-Provider/np_request_table");
const {REQUEST_table_row_res} = require("../../query/Name-Provider/np_request_table");
const {RESPONSE_table, SET_status} = require("../../query/Name-Provider/np_request_table");


exports.request_table = (req, res, next) => {

    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REQUEST_table,[req.params.receiver_id], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    req:data,
                  //  data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}

exports.today_request_table = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(TODAY_req,[req.params.receiver_id], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    req:data,
                    // data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}

exports.request_table_row = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REQUEST_table_row,[req.params.receiver_id], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    req:data,
                    //data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}

//response message related to request data
exports.request_table_row_res = (req, res, next) => {

    try {

       console.log( conn.query(REQUEST_table_row_res,[req.params.request_id], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    req:data,
                    //data:"success"
                })
            }

        }))
    } catch ( err ) {

    }

}

//insert data to response
exports.insert_response = (req, res, next) => {

    try {

        console.log( conn.query(RESPONSE_table,[[req.params.request_id,req.params.msg,req.params.names]], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                conn.query(SET_status, [req.params.request_id],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                })
                res.status(200).json({
                    // req:data,
                    data:"success"
                })

            }

        }))
    } catch ( err ) {

    }

}



