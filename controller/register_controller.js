const { isEmpty } = require('../utils/is_empty');
const conn = require('../service/db_service');
const { CHECK_user_pd_email,CHECK_user_al_email,CHECK_user_np_email,REGISTER_User_pd,REGISTER_User_al,REGISTER_User_np,COMMON_user} = require('../query/register');
//const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const JWT = require('jsonwebtoken');
const {query} = require("express");

const {USER_MODEL} = require("../model/register");
const {STUDENT_LOGIN_MODEL} = require("../model/student");
const {CHECK_EMAIL, CHECK_NP, CHECK_PT, CHECK_AL, CHECK_ADMIN} = require("../query/student");

exports.user_register = (req, res, next) => {
    if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try{

        //const { error } = USER_MODEL.validate([req.body.name,req.body.email,req.body.password]);
       // console.log(error)
        //if (error) return next( new AppError( error.details[0].message , 400));

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
                    conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                        if (err) return next(new AppError(err, 500));

                        res.status(201).json({
                            data: "pediatrician Registration success!"
                        })
                    })



                })

                //insert data into common user table


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
                console.log( conn.query(REGISTER_User_al, [[req.body.name, hashedValue, req.body.email,req.body.service_charge]],async (err, data, feilds) => {

                    if (err) return next(new AppError(err, 500));
                    //insert data into common user table
                    conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                        if (err) return next(new AppError(err, 500));

                        res.status(201).json({
                            data: "Astrologer Registration success!"
                        })
                    })


                }))


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

                    //insert data into common user table
                    conn.query(COMMON_user, [[req.body.email, hashedValue,type]],async (err, data, feilds) => {

                        if (err) return next(new AppError(err, 500));

                        res.status(201).json({
                            data: "Name Provider Registration success!"
                        })
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

exports.user_login = (req, res, next) => {
    // console.log(req)
    const email=req.query.email
    const password=req.query.password
    const data1={
        "email":email,
        "password":password
    }
    // console.log(data1)
    if (isEmpty(data1)) return next( new AppError("form data not found" , 400));
    try {
        const { error } = STUDENT_LOGIN_MODEL.validate(data1);
        if (error) return next( new AppError( error.details[0].message , 400));
        conn.query(CHECK_EMAIL, [data1.email], async (err, data, feilds) => {
            const password=data[0].password
            // console.log("ps from db")
            const isMatched = await bcrypt.compare(data1.password,password);
            // console.log("is matching...")
            // console.log(isMatched)

            if( !isMatched ) { next( new AppError( "Email or Password Invalid" , 401))}else {
                const type=data[0].type
                // console.log(data[0])

            if(type=='NP'){
                conn.query(CHECK_NP,[data[0].email],async (err,data,feilds) => {
                    // console.log(data)
                    res.status(200).json({
                        data: data,
                    })
                })
            }
            else if(type=='PT'){
                conn.query(CHECK_PT,[data[0].email],async (err,data,feilds) => {
                    const token = JWT.sign( { name: data[0].name, s_id: data[0].user_id } , "ucscucscucsc" , { expiresIn: "1d"} );

                    // console.log("this is pt data")
                    // console.log(data[0].name)
                    // res.status(200).json({
                    //     data: data,
                    //     token:token
                    // })
                    res.header("auth-token", token).status(200).json({
                        data: data,
                        token: token
                    })
                })
            }
            else if (type=='AL'){
                conn.query(CHECK_AL,[data[0].email],async (err,data,feilds) => {
                    console.log(data)
                    res.status(200).json({
                        data: data,
                    })
                })
            }
            else if (type=='ADMIN'){
                conn.query(CHECK_ADMIN,[data[0].email],async (err,data,feilds) => {
                    console.log(data)
                    res.status(200).json({
                        data: data,
                    })
                })
            }
            // const isMatched = await bcrypt.compare(data1.password , data[0].password);
            // if( isMatched ) return next( new AppError( "Email or Password Invalid" , 401));
            //
            // const token = JWT.sign( { name: data[0].name, s_id: data[0].user_id } , "ucscucscucsc" , { expiresIn: "1d"} );
            //
        }})
    } catch ( err ) {

    }
}










