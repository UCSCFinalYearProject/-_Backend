const { isEmpty } = require('../utils/is_empty');
const conn = require('../service/db_service');
const { CHECK_user_email, REGISTER_User } = require('../query/register');
//const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const JWT = require('jsonwebtoken');
const {query} = require("express");



exports.user_register = (req, res, next) => {
    console.log(req.body.password)
    if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));

    try {
       // const { error } = STUDENT_MODEL.validate(req.body);

        //if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(CHECK_user_email, [req.body.email], async (err, data, feilds) => {
            if (err) return next( new AppError( err , 500));

            if (data.length) return next( new AppError("Email already used!" , 400));

            const salt = await bcrypt.genSalt(10);
            const hashedValue = await bcrypt.hash(req.body.password, salt);

            console.log(conn.query(REGISTER_User, [[req.body.name,hashedValue,req.body.email]], (err, data, feilds) => {

                if (err) return next( new AppError( err , 500));

                res.status(201).json({
                    data: "Student Registration success!"
                })
            }))
        })

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}