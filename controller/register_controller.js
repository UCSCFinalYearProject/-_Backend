const { isEmpty } = require('../utils/is_empty');
const conn = require('../service/db_service');
const { CHECK_user_pd_email,CHECK_user_al_email,CHECK_user_np_email,REGISTER_User_pd,REGISTER_User_al,REGISTER_User_np,COMMON_user} = require('../query/register');
//const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const JWT = require('jsonwebtoken');
const {query} = require("express");

exports.user_register = (req, res, next) => {
    if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try{
        //if user type is 1 then insert data into pediatrician table
        if (req.body.user_type == 1) {
            let type = 'PT'
            conn.query(CHECK_user_pd_email, [req.body.email], async (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));

                if (data.length) return next(new AppError("Email already used!", 400));
                const salt = await bcrypt.genSalt(10);
                const hashedValue = await bcrypt.hash(req.body.password, salt);
                conn.query(REGISTER_User_pd, [[req.body.name, hashedValue, req.body.email]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "pediatrician Registration success!"
                    })
                })

                //insert data into common user table
                conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "pediatrician Registration success!"
                    })
                })



            })




        }

        //if user type is 2 then insert data into astrologer table
        if (req.body.user_type == 2) {
            let type = 'AL'
            conn.query(CHECK_user_al_email, [req.body.email], async (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));

                if (data.length) return next(new AppError("Email already used!", 400));

                const salt = await bcrypt.genSalt(10);
                const hashedValue = await bcrypt.hash(req.body.password, salt);
                conn.query(REGISTER_User_al, [[req.body.name, hashedValue, req.body.email,req.body.service_charge]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "Astrologer Registration success!"
                    })
                })
                //insert data into common user table
                conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "Astrologer Registration success!"
                    })
                })

            })




        }

        //if user type is 3 then insert data into name provider table
        if (req.body.user_type == 3) {
            let type = 'NP'
            conn.query(CHECK_user_np_email, [req.body.email], async (err, data, feilds) => {
                if (err) return next(new AppError(err, 500));

                if (data.length) return next(new AppError("Email already used!", 400));
                const salt = await bcrypt.genSalt(10);
                const hashedValue = await bcrypt.hash(req.body.password, salt);
                conn.query(REGISTER_User_np, [[req.body.name, hashedValue, req.body.email,req.body.service_charge]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "Name Provider Registration success!"
                    })
                })

                //insert data into common user table
                conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));

                    res.status(201).json({
                        data: "Name Provider Registration success!"
                    })
                })

            })


        }

    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }
}










