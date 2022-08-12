const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {PROFILE_card } = require('../../../query/Name-Provider/np_dash_board');
const { PROFILE_CARD_MODEL } = require('../../../model/Name-Provider/Np-Dashboard/profile_card_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

exports.profile_card = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(PROFILE_card,[req.params.user_id],(err,data,feild)=>{

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
