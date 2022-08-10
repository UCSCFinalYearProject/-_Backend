const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {REQUEST_table } = require('../../query/Name-Provider/np_request_table');
const { REQUEST_TABLE_MODEL } = require('../../model/Name-Provider/np_request_table_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');


exports.request_table = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REQUEST_table, (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data,
                    data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}