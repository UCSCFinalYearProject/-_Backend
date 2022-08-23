const { isEmpty } = require('../utils/is_empty');
const conn = require('../service/db_service');
const { CHECK_EMAIL, REGISTER_STUDENT,CHECK_NP,CHECK_PT,CHECK_AL,CHECK_ADMIN } = require('../query/student');
const { STUDENT_MODEL, STUDENT_LOGIN_MODEL } = require('../model/student');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const JWT = require('jsonwebtoken');


exports.student_login = (req, res, next) => {
    console.log(req)
    const email=req.query.email
    const password=req.query.password
    const data1={
        "email":email,
        "password":password
    }
    console.log(data1)
    if (isEmpty(data1)) return next( new AppError("form data not found" , 400));
    try {
        const { error } = STUDENT_LOGIN_MODEL.validate(data1);
        if (error) return next( new AppError( error.details[0].message , 400));
        conn.query(CHECK_EMAIL, [data1.email], async (err, data, feilds) => {
            // if (err) return next( new AppError( err , 500));
            // if ( !data.length ) return next( new AppError( "Email or Password Invalid" , 401));
          console.log(data[0].type)
            const type=data[0].type
            if(type=='NP'){
                conn.query(CHECK_NP,[data[0].email],async (err,data,feilds) => {
                    console.log(data)
                    res.status(200).json({
                        data: data,
                    })
                })
            }
            else if(type=='PT'){
                conn.query(CHECK_PT,[data[0].email],async (err,data,feilds) => {
                    console.log(data)
                    res.status(200).json({
                        data: data,
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
        })
    } catch ( err ) {

    }
}

exports.student_register = (req, res, next) => {
    if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));

    try {
        const { error } = STUDENT_MODEL.validate(req.body);

        if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(CHECK_STUDENT_EMAIL, [req.body.email], async (err, data, feilds) => {
            if (err) return next( new AppError( err , 500));
            
            if (data.length) return next( new AppError("Email already used!" , 400));

            const salt = await bcrypt.genSalt(10);
            const hashedValue = await bcrypt.hash(req.body.password, salt);

            conn.query(REGISTER_STUDENT, [[req.body.name, req.body.age, req.body.rank, req.body.email, hashedValue]], (err, data, feilds) => {
                if (err) return next( new AppError( err , 500));

                res.status(201).json({
                    data: "Student Registration success!"
                })
            })
        })

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}