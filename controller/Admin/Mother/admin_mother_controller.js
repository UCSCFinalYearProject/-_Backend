const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const { REGISTERED_Mothers } = require('../../../query/Admin/Mother/admin_mother');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');


exports.registered_mothers = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REGISTERED_Mothers, (err,data,feild)=>{

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
    // res.status(200).json({
    //     // students:data
    //     data:"success"
    // })
}
