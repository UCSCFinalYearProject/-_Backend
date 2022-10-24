const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const { CHECK_user_pd_email, CHECK_user_al_email, CHECK_user_np_email, REGISTER_User_pd, REGISTER_User_al, REGISTER_User_np, COMMON_user } = require('../../query/register');
//const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');
const { query } = require("express");

const { USER_MODEL } = require("../../model/register");
const { PARENT_MODEL  } = require("../../model/Mother/mother_model");
const { STUDENT_LOGIN_MODEL } = require("../../model/student");
const { CHECK_EMAIL, CHECK_MOBILE, REGISTER_MOTHER } = require("../../query/Mother/mother");

exports.mother_register = (req, res, next) => {
    if (isEmpty(req.body)) return next(new AppError("form data not found", 400));
    try {
        const { error } = PARENT_MODEL.validate({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            DP: req.body.DP
    });
        console.log(error)
        if (error) return next( new AppError( error.details[0].message , 400));
        
        conn.query(CHECK_EMAIL, [req.body.email], async (err, data, feilds) => {
            if (err) return next(new AppError(err, 500));

            if (data.length) return next(new AppError("Email already used!", 400));
            conn.query(CHECK_MOBILE, [req.body.mobile], async (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));
    
                if (data.length) return next(new AppError("Mobile already used!", 400));
                const salt = await bcrypt.genSalt(10);
                const hashedValue = await bcrypt.hash(req.body.password, salt);
                conn.query(REGISTER_MOTHER, [req.body.first_name ,req.body.last_name, hashedValue, req.body.email,  req.body.DP , req.body.mobile], async (err, data, feilds) => {
                    
                    console.log(req.body.first_name ,req.body.last_name, hashedValue, req.body.email,  req.body.DP , req.body.mobile)
                    if (err) return next(new AppError(err, 500));
                    res.status(201).json({
                        data: "Parent Registration success!",
                        status: "Success"
                    })
    
    
    
                })    
            })


        })


    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.mother_login = (req, res, next) => {
    // console.log(req)
    
    const dataFromRequest = {
        "mobile": req.body.mobile,
        "password": req.body.password
    }
    
    // console.log(data1)
    if (isEmpty(dataFromRequest)) return next(new AppError("form data not found", 400));
    try {
        const { error } = PARENT_MODEL.validate(dataFromRequest);
        if (error) return next(new AppError(error.details[0].message, 400));
        conn.query(CHECK_MOBILE, [dataFromRequest.mobile], async (err, data, feilds) => {
            
            const password = data[0].password
            console.log("ps from db " + password )
            console.log(dataFromRequest.password)
            const isMatched = await bcrypt.compare(dataFromRequest.password, password);
            console.log("is matching...")   
            console.log(isMatched)

            if (!isMatched) { next(new AppError("Mobile or Password Invalid", 401)) } else {
                // const token = JWT.sign( data , "ucscucscucsc" , { expiresIn: "1d"} );

                // console.log(data[0]) 
                res.status(200).json({
                    data: data,
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}










