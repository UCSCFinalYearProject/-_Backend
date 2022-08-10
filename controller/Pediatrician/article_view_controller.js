const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_articles
} = require('../../query/Pediatrician/view_article');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_articles = (req, res, next) => {
    try {
        conn.query(VIEW_articles,[req.body.doctor_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data
                })
            }

        })
    } catch ( err ) {

    }
}
