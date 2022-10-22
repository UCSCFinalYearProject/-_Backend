const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const multer = require('multer');
const path = require('path');


const {
    VIEW_articles,
    VIEW_single_articles,
    VIEW_articles_comments,
    VIEW_followers,
    Trending_article,
    no_of_articles,
    block_article_comments,
    no_of_article_comments,
    unblock_article_comments,
    today_comments,
    article_categories,
    VIEW_all_articles
} = require('../../query/Pediatrician/view_article');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_all_articles = (req, res, next) => {
    // console.log("all article")
    try {
        conn.query(VIEW_all_articles,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.VIEW_articles = (req, res, next) => {
 //   const x= req.getParameters(doctor_id)
    const y= req.query['doctor_id'];
    // console.log(y)
    try {
        conn.query(VIEW_articles,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.VIEW_single_articles = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log(req.params.article_id)
    // console.log(req.query.article_id)
    // console.log(req.query.doctor_id)
    // console.log("set")
    try {
        conn.query(VIEW_single_articles,[req.query.article_id,req.query.doctor_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.VIEW_article_commits = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log("id")
    // console.log(req.query.article_id)
    try {
        conn.query(VIEW_articles_comments,[req.query.article_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.VIEW_followers = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    const y= req.query['doctor_id'];
    // console.log(req.query.doctor_id)
    try {
        conn.query(VIEW_followers,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    followers:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.Trending_article = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log(req.params.article_id)
    try {
        conn.query(Trending_article,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.no_of_articles = (req, res, next) => {
    try {
        conn.query(no_of_articles,[req.body.doctor_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    count:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.no_of_article_comments = (req, res, next) => {
    const y= req.query['article_id'];
    try {
        conn.query(no_of_article_comments,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    count:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.block_article_comments = (req, res, next) => {
    // console.log("came")
    // console.log(req)
    const y= req.body.params.comment_id;
    try {
        conn.query(block_article_comments,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    set:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.unblock_article_comments = (req, res, next) => {
    // console.log("came")
    // console.log(req)
    const y= req.body.params.comment_id;
    try {
        conn.query(unblock_article_comments,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    set:data
                })
            }

        })
    } catch ( err ) {

    }
}


exports.today_article_comments = (req, res, next) => {
    // const y= req.query['today'];
    // console.log(y)
    try {
        conn.query(article_categories,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    categories:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.article_categories = (req, res, next) => {
    const y= req.query['today'];
    // console.log(y)
    try {
        conn.query(today_comments,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    comment:data
                })
            }

        })
    } catch ( err ) {

    }
}
// const storage = multer.diskStorage({
//     destination: path.join(__dirname, '.public/', 'assets'),
//
//     filename: function (req, file, cb) {
//         // null as first argument means no error
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/assets/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

exports.imageupload = (req, res, next) => {
    console.log(__dirname)
    // console.log(req.body.params)
    //
    // try {
    //     // 'avatar' is the name of our file input field in the HTML form
    //
    //     let upload = multer({ storage: storage}).single('avatar');
    //
    //     upload(req, res, function(err) {
    //         // req.file contains information of uploaded file
    //         // req.body contains information of text fields
    //
    //         if (!req.body.params.image) {
    //             return res.send('Please select an image to upload');
    //         }
    //         else if (err instanceof multer.MulterError) {
    //             return res.send(err);
    //         }
    //         else if (err) {
    //             return res.send(err);
    //         }
    //
    //         const classifiedsadd = {
    //             image_1: req.body.params.image
    //         };
    //         console.log(classifiedsadd)
    //         const sql = "UPDATE `article` SET image_1=? WHERE `article`.`article_id`=2";
    //         console.log(sql)
    //         conn.query(sql, classifiedsadd.image_1, (err, results) => {  if (err) throw err;
    //             res.json({results})
    //
    //         });

    //     });
    //
    // }catch (err) {console.log(err)}
}
