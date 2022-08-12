const { isEmpty } = require('../../../../utils/is_empty');
const conn = require('../../../../service/db_service');
const {STAT_card2} = require('../../../../query/Admin/Astrologer/al_report');
const { STAT_CARD1_MODEL } = require('../../../../model/Admin/Astrologer/Al-Report/report_stat_card2_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../../utils/appError');
const JWT = require('jsonwebtoken');


exports.stat_card = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(STAT_card2,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    al_count_month:data,
                    data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}
